import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Message*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Subject:* ${form.subject}%0A%0A*Message:*%0A${form.message}`;
    window.open(`https://wa.me/2348033204246?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24">
      <SEO
        title="Contact Us"
        description="Contact Grace Logistics Foods & Items (GLFI) for shipping quotes, food sourcing inquiries, or general logistics support. Based in Lagos, shipping worldwide."
        ogUrl="https://gracelogisticsfoodanditems.vercel.app/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Get in <span className="text-blue-500">Touch</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions about shipping rates or foodstuff sourcing? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            {[
              { icon: <Phone className="w-6 h-6" />, title: 'Call Us', text: '+234 803 320 4246', sub: 'Available 9AM - 6PM WAT' },
              { icon: <Mail className="w-6 h-6" />, title: 'Email Us', text: 'grace.pggscargo@gmail.com', sub: 'We reply within 24 hours' },
              { icon: <MapPin className="w-6 h-6" />, title: 'Visit Us', text: 'No 12, Afari Street, Oshodi', sub: 'Lagos, Nigeria' }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-6 bg-[#0a0a14] p-8 rounded-2xl border border-white/5">
                <div className="p-4 bg-blue-600/10 text-blue-500 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-blue-400 font-semibold mb-1">{item.text}</p>
                  <p className="text-gray-500 text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#0a0a14] p-10 rounded-3xl border border-white/5 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all" placeholder="Shipping Inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all resize-none" placeholder="Tell us about your logistics needs..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 h-96 w-full rounded-3xl border border-white/5 overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=No+12+Afari+Street,Oshodi,Lagos,Nigeria&output=embed&z=17"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;