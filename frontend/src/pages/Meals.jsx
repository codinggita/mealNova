import React, { useState } from 'react';

const Meals = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Vegan', 'Dessert'];

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Explore Meals</h1>
          <p className="text-gray-600 mt-2">Find the perfect dish for your next meal.</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <input 
            type="text" 
            placeholder="Search recipes..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category 
                ? 'bg-orange-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group">
            <div className="h-48 bg-gray-100 relative overflow-hidden">
              <div className="w-full h-full bg-orange-50 flex items-center justify-center text-orange-200 group-hover:scale-105 transition-transform duration-300">
                Meal Image
              </div>
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900 leading-tight">Gourmet Recipe {item}</h3>
                <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold">
                  ★ 4.8
                </div>
              </div>
              
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                Healthy and delicious meal packed with nutrients. Perfect for {activeCategory === 'All' ? 'anytime' : activeCategory.toLowerCase()}.
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Price</span>
                  <span className="font-bold text-orange-600 text-lg">$14.99</span>
                </div>
                
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Placeholder */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
            &larr;
          </button>
          <button className="w-10 h-10 rounded-lg bg-orange-600 text-white font-bold shadow-sm">1</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">2</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium">3</button>
          <span className="text-gray-500">...</span>
          <button className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
            &rarr;
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Meals;
