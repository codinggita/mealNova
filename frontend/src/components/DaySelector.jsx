import React from 'react';

const DaySelector = ({ activeDay, onSelectDay }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="flex overflow-x-auto border-b border-gray-100 hide-scrollbar scroll-smooth">
      {daysOfWeek.map((day) => {
        const isActive = activeDay === day;
        return (
          <button
            key={day}
            onClick={() => onSelectDay(day)}
            className={`
              flex-1 min-w-[120px] py-4 text-center font-medium transition-all relative
              ${isActive ? 'text-orange-600 bg-orange-50/50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
            `}
          >
            {day}
            {isActive && (
              <div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"
                style={{ 
                  animation: 'slideIn 0.3s ease-out forwards' 
                }}
              ></div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default DaySelector;
