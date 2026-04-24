import React from 'react';

const Loader = ({ size = 'md', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4'
  };

  const spinner = (
    <div className="relative flex justify-center items-center">
      <div className={`${sizeClasses[size]} rounded-full border-gray-200 border-solid animate-spin`} style={{ borderTopColor: '#f97316' }}></div>
      <div className={`absolute ${sizeClasses[size]} rounded-full border-orange-500 border-solid animate-ping opacity-20`}></div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex justify-center items-center z-50">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-4 w-full">
      {spinner}
    </div>
  );
};

export default Loader;
