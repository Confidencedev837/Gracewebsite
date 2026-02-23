"use client"
import React, { useState, useEffect } from 'react';
import { Star, Quote, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getComments } from '../store';

const avatarImages = [
  "https://images.unsplash.com/photo-1723221907119-397c26c8f580?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1602058746258-e012b1c1197c?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1723221906960-1c5a5febc9c3?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1692873060123-59ef129f9bac?w=600&auto=format&fit=crop&q=60",
];

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
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-[1px] h-10 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] mb-4" />
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-4"
          >
            Satisfied Clients
          </motion.span>
          <h3 className="text-4xl font-bold text-white">What Our Customers Say</h3>
          <p className="text-gray-400 mt-3 text-sm">Real reviews from real customers</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comments.length > 0 ? comments.map((t, idx) => (
              <div
                key={t.$id}
                className="bg-[#0a0a14] p-8 rounded-2xl border border-white/5 relative group hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-500/10 group-hover:text-blue-500/25 transition-colors duration-300" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 italic mb-8 leading-relaxed text-sm">
                  "{t.comment}"
                </p>

                {/* Divider */}
                <div className="border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3">
                    {/* Avatar — fixed circle */}
                    <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden border-2 border-blue-500/40 flex-shrink-0">
                      <Image
                        src={avatarImages[idx % avatarImages.length]}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-xs text-blue-400 mt-0.5">
                        {new Date(t.$createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    {/* Verified badge */}
                    <span className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-3 text-center text-gray-600 py-12 italic">
                Be the first to leave a review about our services!
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;