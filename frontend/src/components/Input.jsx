import React from 'react';

const Input = ({ 
  label, 
  error, 
  icon, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label className="mb-1.5 text-sm font-bold text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        
        <input 
          className={`
            w-full px-4 py-3 rounded-xl border bg-gray-50 text-gray-900 
            transition-all duration-200 outline-none
            focus:bg-white focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : 'border-gray-200'}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1.5 text-sm text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
