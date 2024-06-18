import React from 'react';

const StatCard = ({ icon, title, description, value, className }: any) => {
  return (
    <div
      className={`bg-white shadow rounded p-4 flex items-center space-x-4 ${className}`}
    >
      <div className='text-2xl text-gray-500'>{icon}</div>
      <div className='flex-1'>
        <h3 className='font-semibold text-sm truncate'>{title}</h3>
        <p className='text-gray-600 text-xs truncate'>{description}</p>
      </div>
      <div className='text-xl font-bold text-gray-700'>{value}</div>
    </div>
  );
};

export default StatCard;
