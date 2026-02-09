
import React, { useState, useEffect } from 'react';
import { Star, Quote, Loader2 } from 'lucide-react';
import { getComments } from '../store';

const Testimonials: React.FC = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getComments();
      setComments(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <section className="py-24 bg-[#05050a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">Satisfied Clients</h2>
          <h3 className="text-4xl font-bold text-white">What Our Customers Say</h3>
        </div>

        {loading ? (
          <div className="flex justify-center py-12"><Loader2 className="w-10 h-10 text-blue-500 animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comments.length > 0 ? comments.map((t, idx) => (
              <div 
                key={t.$id} 
                className="bg-[#0a0a14] p-10 rounded-2xl border border-white/5 relative group hover:border-blue-500/30 transition-all"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">
                  "{t.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center font-bold mr-4 text-sm text-white shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-blue-400">{new Date(t.$createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-3 text-center text-gray-600 py-12 italic">
                Be the first to leave a comment about our services!
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
