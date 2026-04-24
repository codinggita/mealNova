import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-9xl font-extrabold text-orange-100 mb-4 tracking-tighter">
        404
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Oops! Page not found
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transform hover:-translate-y-1 transition-all shadow-lg text-lg flex items-center"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
