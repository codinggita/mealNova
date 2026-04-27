import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_TESTIMONIALS } from '../services/mockData';
import StarRating from '../components/StarRating';

const About = () => {
  return (
    <div className="py-8 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Healthy Eating, <br />
          <span className="text-orange-600">Made Simple.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          MealNova was born from a simple idea — everyone deserves delicious, home-style meals without the hassle of daily cooking. We bring the best of Indian cuisine straight to your door.
        </p>
      </section>

      {/* Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: '🌿', title: 'Fresh Ingredients', desc: 'Every meal is prepared with locally sourced, fresh ingredients. No preservatives, no shortcuts.' },
          { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Our team of experienced home-style chefs ensures authentic flavors in every box delivered.' },
          { icon: '📦', title: 'On-Time Delivery', desc: 'We guarantee punctual delivery within the scheduled time slot, every single day.' },
        ].map((val) => (
          <div key={val.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div className="text-5xl mb-4">{val.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
            <p className="text-gray-500">{val.desc}</p>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white rounded-3xl p-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '50+', label: 'Daily Recipes' },
            { value: '99%', label: 'On-Time Delivery' },
            { value: '4.8★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold text-orange-400 mb-2">{stat.value}</p>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <StarRating rating={t.rating} size="sm" />
              <p className="text-gray-600 my-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to eat better?</h2>
        <p className="text-gray-600 mb-8">Join thousands of happy customers enjoying fresh meals every day.</p>
        <Link to="/login" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-colors shadow-lg text-lg inline-block">
          Get Started Today
        </Link>
      </section>
    </div>
  );
};

export default About;
