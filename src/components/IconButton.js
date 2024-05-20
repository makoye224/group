import React from 'react';

const IconButton = ({ iconName: IconComponent, buttonText, onClick }) => {
  return (
    <button onClick={onClick} className="flex flex-col items-center mx-2 focus:outline-none">
      <div className="w-14 h-14 rounded-full bg-blue-500 flex justify-center items-center mb-2">
        <IconComponent size={28} color="#ffffff" />
      </div>
      <span className="text-black text-center text-xs">{buttonText}</span>
    </button>
  );
};

export default IconButton;
