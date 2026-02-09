
import { Client, Databases, ID, Query, Storage } from 'appwrite';
import { FoodItem } from './types';

// APPWRITE CONFIGURATION
const APPWRITE_ENDPOINT = 'https://cloud.appwrite.io/v1';
const PROJECT_ID = '67ee50a1000edc795c2b';
const DATABASE_ID = '67ee54f1000a66030b03';

// COLLECTION IDs
const PRODUCTS_COLLECTION_ID = '67ee54fb003b923989d7';
const BUYERS_COLLECTION_ID = '67f3a5d9001e4cf6985c';
const COMMENTS_COLLECTION_ID = '67f3a65900269da4de11';
// CORRECT STORAGE BUCKET ID provided by user
const BUCKET_ID = '67ee55c3002f451258a0'; 

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(PROJECT_ID);

const databases = new Databases(client);
const storage = new Storage(client);

// DEBUG MEASURES
const logger = {
  log: (msg: string, data?: any) => console.log(`[PGGS-DEBUG] ${msg}`, data || ''),
  error: (msg: string, err?: any) => console.error(`[PGGS-ERROR] ${msg}`, err || '')
};

/**
 * PRODUCTS
 */
export const getFoodItems = async (): Promise<FoodItem[]> => {
  try {
    logger.log("Fetching products from collection:", PRODUCTS_COLLECTION_ID);
    const response = await databases.listDocuments(DATABASE_ID, PRODUCTS_COLLECTION_ID, [
      Query.orderDesc('$createdAt')
    ]);
    
    logger.log("Documents found:", response.documents.length);
    
    return response.documents.map((doc: any) => {
      const rawImageIds = doc.imageIds || [];
      const imageUrls = rawImageIds.map((fileId: string) => {
        try {
          const url = storage.getFileView(BUCKET_ID, fileId);
          return url.toString();
        } catch (e) {
          logger.error(`Failed to get URL for file ${fileId}`, e);
          return '';
        }
      }).filter((url: string) => url !== '');

      return {
        id: doc.$id,
        name: doc.name,
        description: doc.description,
        category: "Nigerian Food",
        price: doc.price,
        images: imageUrls,
        imageIds: rawImageIds
      };
    });
  } catch (error) {
    logger.error("Failed to fetch products", error);
    return [];
  }
};

export const saveProduct = async (data: { name: string, description: string, price: number, files: File[] }) => {
  try {
    logger.log("Starting product save...", data.name);
    
    const imageIds: string[] = [];
    for (const file of data.files) {
      logger.log(`Uploading file: ${file.name}`);
      const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file);
      imageIds.push(uploaded.$id);
    }

    const result = await databases.createDocument(
      DATABASE_ID,
      PRODUCTS_COLLECTION_ID,
      ID.unique(),
      {
        id: ID.unique(),
        name: data.name,
        description: data.description,
        price: data.price,
        imageIds: imageIds
      }
    );
    logger.log("Product saved successfully", result.$id);
    return result;
  } catch (error) {
    logger.error("Error saving product to Appwrite", error);
    throw error;
  }
};

export const deleteProduct = async (id: string, imageIds: string[]) => {
  try {
    logger.log(`Initiating delete for doc: ${id}`);
    
    // 1. Delete database document first
    await databases.deleteDocument(DATABASE_ID, PRODUCTS_COLLECTION_ID, id);
    logger.log(`Document ${id} deleted from database.`);
    
    // 2. Cleanup storage files
    if (imageIds && imageIds.length > 0) {
      for (const imgId of imageIds) {
        try {
          await storage.deleteFile(BUCKET_ID, imgId);
          logger.log(`Storage file ${imgId} deleted.`);
        } catch (e) {
          logger.error(`Failed to delete storage file ${imgId}`, e);
        }
      }
    }
    
    logger.log("Full delete sequence completed.");
    return true;
  } catch (error) {
    logger.error("Critical failure in deleteProduct operation", error);
    throw error;
  }
};

/**
 * COMMENTS / TESTIMONIALS
 */
export const getComments = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COMMENTS_COLLECTION_ID, [
      Query.orderDesc('$createdAt')
    ]);
    return response.documents;
  } catch (error) {
    logger.error("Failed to fetch comments", error);
    return [];
  }
};

/**
 * BUYERS (Requests)
 */
export const logBuyerRequest = async (data: { name: string, email: string, productId: string }) => {
  try {
    return await databases.createDocument(DATABASE_ID, BUYERS_COLLECTION_ID, ID.unique(), data);
  } catch (error) {
    logger.error("Failed to log buyer request", error);
  }
};
