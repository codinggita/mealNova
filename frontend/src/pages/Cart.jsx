import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Fresh Salmon Fillet', category: 'Seafood', amount: '2 lbs', checked: false },
    { id: 2, name: 'Asparagus', category: 'Vegetables', amount: '1 bunch', checked: false },
    { id: 3, name: 'Avocado', category: 'Produce', amount: '3 pieces', checked: true },
    { id: 4, name: 'Whole Grain Bread', category: 'Bakery', amount: '1 loaf', checked: false },
    { id: 5, name: 'Free-range Eggs', category: 'Dairy', amount: '1 dozen', checked: false },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const completedCount = items.filter(i => i.checked).length;
  const progress = items.length === 0 ? 0 : Math.round((completedCount / items.length) * 100);

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Grocery List</h1>
          <p className="text-gray-600 mt-1">Generated from your weekly meal planner.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
          </button>
          <button className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="font-bold text-gray-700">Shopping Progress</span>
          <span className="text-sm font-bold text-orange-600">{completedCount} of {items.length} items</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-orange-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {items.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-1">Your list is empty</h3>
            <p className="text-gray-500 mb-6">Add meals to your planner to generate a list.</p>
            <Link to="/planner" className="inline-block px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
              Go to Planner
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li 
                key={item.id} 
                className={`p-4 sm:p-6 hover:bg-gray-50 transition-colors flex items-center gap-4 cursor-pointer ${item.checked ? 'opacity-60 bg-gray-50' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${item.checked ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
                  {item.checked && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                </div>
                
                <div className="flex-grow">
                  <h4 className={`text-lg font-medium transition-all ${item.checked ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                    {item.name}
                  </h4>
                  <div className="flex gap-3 text-sm mt-1">
                    <span className="text-gray-500">{item.amount}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-orange-600 font-medium">{item.category}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Forgot something? <Link to="/meals" className="text-orange-600 hover:underline">Browse more meals</Link>
        </p>
      </div>
    </div>
  );
};

export default Cart;
