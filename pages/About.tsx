
import React from 'react';
import { Target, Heart, Shield, Award } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <SEO
        title="About Us - Nigerian Food Sourcing Agent & Supplier Lagos"
        description="GLFI is a leading food sourcing agent in Nigeria, connecting you to authentic Nigerian food suppliers in Lagos. Buy Nigerian food items in bulk with ease."
        keywords="Food sourcing agent Nigeria, Buy Nigerian food items in bulk, Nigerian food supplier Lagos, authentic Nigerian food"
        ogUrl="https://gracelogisticsfoodanditems.vercel.app/about"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-8">Your Trusted <span className="text-blue-500">Food Sourcing Agent</span> in Nigeria</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              GFI LIMITED was founded on the principles of trust, efficiency, and reliability. As a premier <strong>Nigerian food supplier in Lagos</strong>, we bridge the gap between local farmers and the global market, ensuring you can buy Nigerian food items in bulk with total confidence.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to simplify logistics. Whether it's a small box of spices for a family in London or several tons of industrial cargo, we treat every shipment with the same professional precision.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="neumorph-card p-4">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                alt="Logistics center"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <span className="block text-4xl font-bold text-white">10+</span>
              <span className="text-blue-100 text-sm">Years Expertise</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Target className="w-8 h-8" />, title: 'Our Mission', text: 'To bridge the distance between cultures through seamless logistics.' },
            { icon: <Heart className="w-8 h-8" />, title: 'Our Values', text: '11 years of Integrity, transparency, and a customer-first approach in all we do.' },
            { icon: <Shield className="w-8 h-8" />, title: 'Reliability', text: 'Guaranteed safe handling and on-time delivery across continents.' },
            { icon: <Award className="w-8 h-8" />, title: 'Excellence', text: 'Maintaining high standards in packaging and documentation.' }
          ].map((item, i) => (
            <div key={i} className="bg-[#0a0a14] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all text-center">
              <div className="inline-flex items-center justify-center p-4 bg-blue-600/10 text-blue-500 rounded-xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
