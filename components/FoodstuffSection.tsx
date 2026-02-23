
import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Send, Search, Loader2, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FoodItem } from '../types';
import { getFoodItems, logBuyerRequest } from '../store';

const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const GalleryModal: React.FC<{ items: { url: string, type: 'image' | 'video' }[]; onClose: () => void }> = ({ items, onClose }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black flex items-center justify-center touch-none"
    >
      <div className="absolute top-0 w-full p-6 flex justify-between items-center z-[80] bg-gradient-to-b from-black/80 to-transparent">
        <span className="text-white/60 text-sm font-medium">{index + 1} / {items.length}</span>
        <button onClick={onClose} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
          <X className="w-8 h-8" />
        </button>
      </div>

      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) nextSlide();
              else if (info.offset.x > 100) prevSlide();
            }}
            className="absolute inset-0 flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
          >
            {items[index].type === 'video' ? (
              <video
                src={items[index].url}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain pointer-events-auto shadow-2xl rounded-lg"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={items[index].url}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-contain select-none pointer-events-none"
                  priority
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {items.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-6 p-4 bg-white/5 hover:bg-white/20 rounded-full transition-all text-white backdrop-blur-md hidden md:flex border border-white/10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-6 p-4 bg-white/5 hover:bg-white/20 rounded-full transition-all text-white backdrop-blur-md hidden md:flex border border-white/10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-[80]">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-10 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};


const RequestModal: React.FC<{ item: FoodItem; onClose: () => void }> = ({ item, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', quantity: '1', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await logBuyerRequest({
      name: formData.name,
      email: formData.email,
      productId: item.id
    });

    const whatsappMessage = `Hello Mrs. PGGS, I'm interested in requesting shipping for:
*Item:* ${item.name}
*Quantity:* ${formData.quantity}
*Name:* ${formData.name}
*Notes:* ${formData.message}`;
    window.open(`https://wa.me/2348033204246?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="relative bg-[#0a0a14] w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-blue-600/5">
          <h3 className="text-xl font-bold">Request Shipping: {item.name}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full"><X className="w-5 h-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-blue-500 transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-blue-500 transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input required type="text" placeholder="Quantity (e.g. 5KG, 2 Packs)" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-blue-500 transition-all" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
          <textarea rows={3} placeholder="Additional Notes" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-blue-500 transition-all resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-bold flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20"><Send className="w-5 h-5" /><span>Request via WhatsApp</span></button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const FoodstuffSection: React.FC = () => {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [galleryMedia, setGalleryMedia] = useState<{ url: string, type: 'image' | 'video' }[] | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getFoodItems();
      setItems(data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const openGallery = (item: FoodItem) => {
    const media: { url: string, type: 'image' | 'video' }[] = [
      ...(item.images || []).map(url => ({ url, type: 'image' as const })),
      ...(item.videos || []).map(url => ({ url, type: 'video' as const }))
    ];
    if (media.length > 0) setGalleryMedia(media);
  };

  return (
    <section id="foodstuff" className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-1 h-12 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)] rounded-full mb-6" />
          <motion.span
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={smoothTransition}
            className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[10px]"
          >
            Sourcing Excellence
          </motion.span>
          <motion.h3
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ...smoothTransition, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Foodstuff Shipping <span className="text-blue-500">Inventory</span>
          </motion.h3>

          <motion.div className="max-w-xl mx-auto relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Nigerian food products..."
              className="w-full bg-[#05050a] border border-white/10 rounded-full py-4 pl-12 pr-6 text-white outline-none focus:border-blue-500 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500">Connecting to sourcing database...</p>
          </div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden" whileInView="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  className="bg-[#05050a] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all group shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden cursor-pointer bg-[#05050a] flex items-center justify-center" onClick={() => openGallery(item)}>
                    {item.images && item.images.length > 0 ? (
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : item.videos && item.videos.length > 0 ? (
                      <video src={item.videos[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" muted />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-600">No Media Available</div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                        <Maximize2 className="text-white w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      <span className="bg-orange-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-lg uppercase tracking-widest">Premium Quality</span>
                      <div className="flex gap-2">
                        {item.images && item.images.length > 0 && (
                          <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm shadow-lg">{item.images.length} Photos</span>
                        )}
                        {item.videos && item.videos.length > 0 && (
                          <span className="bg-orange-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm shadow-lg">{item.videos.length} Videos</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h4 className="text-2xl font-bold text-white tracking-tight leading-tight">{item.name}</h4>
                      {item.price && <span className="text-blue-400 font-bold whitespace-nowrap">₦{item.price.toLocaleString()}</span>}
                    </div>
                    <p className="text-gray-400 text-sm mb-8 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="w-full py-4 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 text-white rounded-xl transition-all font-bold flex items-center justify-center space-x-3 group/btn shadow-md"
                    >
                      <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      <span>Request Shipping</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {!loading && filteredItems.length === 0 && (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-4 opacity-20" />
                <p className="text-gray-500 font-medium">No sourcing matches found for your search.</p>
              </div>
            )}
          </>
        )}
      </div>

      <AnimatePresence>
        {selectedItem && <RequestModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        {galleryMedia && <GalleryModal items={galleryMedia} onClose={() => setGalleryMedia(null)} />}
      </AnimatePresence>
    </section>
  );
};


export default FoodstuffSection;
