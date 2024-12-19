import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="h-8 w-8 bg-blue-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;