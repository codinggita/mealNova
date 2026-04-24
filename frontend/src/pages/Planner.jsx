import React, { useState } from 'react';

const Planner = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [activeDay, setActiveDay] = useState('Monday');

  return (
    <div className="py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Weekly Meal Planner</h1>
          <p className="text-gray-600 mt-2">Organize your meals and generate your grocery list effortlessly.</p>
        </div>
        
        <div className="flex gap-3">
          <button className="px-5 py-2 bg-white text-orange-600 font-bold rounded-lg border border-orange-200 hover:bg-orange-50 transition-colors shadow-sm">
            Generate List
          </button>
          <button className="px-5 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-sm flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Add Meal
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        {/* Days Navigation */}
        <div className="flex overflow-x-auto border-b border-gray-100 hide-scrollbar">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-1 min-w-[120px] py-4 text-center font-medium transition-colors relative ${
                activeDay === day 
                  ? 'text-orange-600 bg-orange-50/50' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {day}
              {activeDay === day && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"></div>
              )}
            </button>
          ))}
        </div>

        {/* Planner Content */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Meals for {activeDay}</h2>
            <span className="text-sm font-medium text-gray-500">3 meals planned</span>
          </div>
          
          <div className="space-y-6">
            {/* Meal Slot 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center group">
              <div className="w-24 h-24 bg-orange-100 rounded-lg flex-shrink-0 flex items-center justify-center text-orange-400 font-bold">
                IMG
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Breakfast</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    8:00 AM
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Avocado Toast with Poached Egg</h3>
                <p className="text-gray-500 text-sm mt-1">Whole grain toast, smashed avocado, cherry tomatoes, and a perfectly poached egg.</p>
              </div>
              
              <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 md:flex-none p-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:text-blue-600 hover:border-blue-200 transition-colors">
                  Edit
                </button>
                <button className="flex-1 md:flex-none p-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:text-red-600 hover:border-red-200 transition-colors">
                  Remove
                </button>
              </div>
            </div>

            {/* Empty Slot */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-orange-300 hover:bg-orange-50/30 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-3 group-hover:bg-orange-100 group-hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <h3 className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors">Add Lunch</h3>
              <p className="text-gray-400 text-sm mt-1">Keep your schedule on track</p>
            </div>
            
            {/* Meal Slot 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center group">
              <div className="w-24 h-24 bg-orange-100 rounded-lg flex-shrink-0 flex items-center justify-center text-orange-400 font-bold">
                IMG
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Dinner</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    7:30 PM
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Grilled Salmon with Asparagus</h3>
                <p className="text-gray-500 text-sm mt-1">Fresh Atlantic salmon grilled with lemon butter sauce, served with roasted asparagus.</p>
              </div>
              
              <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex-1 md:flex-none p-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:text-blue-600 hover:border-blue-200 transition-colors">
                  Edit
                </button>
                <button className="flex-1 md:flex-none p-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:text-red-600 hover:border-red-200 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grocery Summary */}
      <div className="bg-orange-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to shop?</h3>
          <p className="text-gray-600">You have 15 ingredients across 5 planned meals this week.</p>
        </div>
        <button className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors shadow-lg">
          View Grocery List
        </button>
      </div>
    </div>
  );
};

export default Planner;
