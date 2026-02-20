
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Search, Save, LogOut, LayoutGrid, Upload, Loader2, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getFoodItems, saveProduct, deleteProduct } from '../store';
import { FoodItem } from '../types';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const [newItem, setNewItem] = useState({ name: '', description: '', price: 0 });
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    if (isLoggedIn) fetchInventory();
  }, [isLoggedIn]);

  const fetchInventory = async () => {
    setLoading(true);
    try {
      const data = await getFoodItems();
      setItems(data);
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'confidjohn837') {
      setIsLoggedIn(true);
      setError('');
    } else setError('Invalid credentials');
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
    setSubmitting(true);
    try {
      await saveProduct({ ...newItem, files });
      await fetchInventory();
      setNewItem({ name: '', description: '', price: 0 });
      setFiles([]);
      alert("Product added successfully!");
    } catch (err: any) {
      console.error(err);
      alert(`Error saving item: ${err.message || 'Check connection'}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (item: FoodItem) => {
    if (!confirm(`Are you sure you want to delete "${item.name}"? This action cannot be undone.`)) return;
    
    setLoading(true);
    try {
      console.log(`[ADMIN] Deleting product ${item.id}`);
      await deleteProduct(item.id, item.imageIds || []);
      // Refresh inventory
      const data = await getFoodItems();
      setItems(data);
      alert("Product deleted successfully.");
    } catch (err: any) {
      console.error("[ADMIN] Delete failed", err);
      alert(`Delete failed: ${err.message}. Ensure the collection has 'Delete' permissions enabled for the current role.`);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-40 pb-24 flex items-center justify-center px-4 bg-[#05050a]">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#0a0a14] p-10 rounded-3xl border border-white/5 shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="text" placeholder="Username" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-blue-500 transition-all" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-blue-500 transition-all" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">Login</button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-[#05050a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Admin <span className="text-blue-500">Panel</span></h1>
          <button onClick={() => setIsLoggedIn(false)} className="flex items-center space-x-2 px-6 py-3 bg-red-600/10 text-red-600 border border-red-600/20 rounded-xl hover:bg-red-600 hover:text-white transition-all">
            <LogOut className="w-5 h-5" /><span>Sign Out</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-[#0a0a14] p-8 rounded-3xl border border-white/5 sticky top-32">
              <h2 className="text-xl font-bold mb-6 flex items-center space-x-2"><Plus className="text-blue-500" /><span>Add Product</span></h2>
              <form onSubmit={handleAddItem} className="space-y-4">
                <input required type="text" placeholder="Product Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none" value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} />
                <input required type="number" placeholder="Price (₦)" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none" value={newItem.price || ''} onChange={(e) => setNewItem({...newItem, price: parseInt(e.target.value)})} />
                <textarea required rows={3} placeholder="Description" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none resize-none" value={newItem.description} onChange={(e) => setNewItem({...newItem, description: e.target.value})} />
                
                <div className="space-y-2">
                  <label className="block text-sm text-gray-500 font-medium">Upload Images</label>
                  <div className="relative border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-blue-500/50 transition-all cursor-pointer">
                    <input multiple type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setFiles(Array.from(e.target.files || []))} />
                    <Upload className="w-8 h-8 mx-auto text-gray-600 mb-2" />
                    <span className="text-xs text-gray-500">{files.length > 0 ? `${files.length} files selected` : 'Click or Drag images here'}</span>
                  </div>
                </div>

                <button disabled={submitting} type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50">
                  {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                  <span>{submitting ? 'Uploading...' : 'Save Product'}</span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#0a0a14] p-8 rounded-3xl border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold flex items-center space-x-2"><LayoutGrid className="text-orange-500" /><span>Active Inventory</span></h2>
                <div className="relative max-w-xs w-full">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                   <input type="text" placeholder="Search..." className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white text-sm outline-none focus:border-blue-500" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>

              {loading && items.length === 0 ? (
                <div className="flex justify-center py-20"><Loader2 className="w-12 h-12 text-blue-500 animate-spin" /></div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                    <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                      <div className="h-40 relative">
                        {item.images && item.images.length > 0 ? (
                          <img src={item.images[0]} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-600 italic">No Image</div>
                        )}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button 
                            disabled={loading}
                            onClick={() => handleDelete(item)} 
                            className="p-3 bg-red-600 rounded-full text-white hover:scale-110 transition-all disabled:opacity-50"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div className="overflow-hidden">
                           <h4 className="font-bold truncate">{item.name}</h4>
                           <p className="text-[10px] text-gray-600 truncate">{item.id}</p>
                        </div>
                        <span className="text-blue-400 text-xs font-bold whitespace-nowrap ml-2">₦{item.price?.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                  {items.length === 0 && !loading && (
                    <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
                       <AlertCircle className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                       <p className="text-gray-500">No inventory items found.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
