import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* Hero Section */}
      <section className="relative bg-orange-50 rounded-3xl overflow-hidden shadow-sm mt-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-200 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-200 opacity-50 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Delicious Meals, <br />
              <span className="text-orange-600">Planned for You</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover amazing recipes, plan your weekly meals, and get groceries sorted in one place. Healthy eating has never been easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/meals" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transform hover:scale-105 transition-all shadow-lg text-lg">
                Explore Meals
              </Link>
              <Link to="/planner" className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 border-2 border-orange-200 transform hover:scale-105 transition-all shadow-sm text-lg">
                Start Planning
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Image Placeholder */}
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-75">
                Hero Image
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-2xl">🥗</span> Fresh
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              <span className="text-2xl">⚡</span> Fast
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Recipes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Try our most popular meals this week, handpicked by our culinary experts.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="w-full h-full bg-orange-100 flex items-center justify-center text-orange-300 group-hover:scale-110 transition-transform duration-500">
                  Image {item}
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">30 Min</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delicious Recipe {item}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  A wonderful mix of fresh ingredients bringing out the best flavors for a perfect dinner.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-orange-600">$12.99</span>
                  <button className="bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-200 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/meals" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700">
            View All Recipes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-900 text-white py-20 rounded-3xl mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">How MealNova Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg shadow-orange-500/30">
                🔍
              </div>
              <h3 className="text-xl font-bold mb-4">1. Discover</h3>
              <p className="text-gray-400">Browse thousands of nutritious and tasty recipes tailored to your diet.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg shadow-orange-500/30">
                📅
              </div>
              <h3 className="text-xl font-bold mb-4">2. Plan</h3>
              <p className="text-gray-400">Add meals to your weekly planner and generate smart grocery lists.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg shadow-orange-500/30">
                👨‍🍳
              </div>
              <h3 className="text-xl font-bold mb-4">3. Cook</h3>
              <p className="text-gray-400">Follow simple step-by-step instructions to create culinary masterpieces.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
