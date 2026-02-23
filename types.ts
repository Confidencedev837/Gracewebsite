
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  imageIds?: string[];
  videos?: string[];
  videoIds?: string[];
  price?: number;
}


export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface NavLink {
  label: string;
  path: string;
}
