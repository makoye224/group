import React, { useState } from "react";
import { MdSearch } from 'react-icons/md'; // Import the search icon

export default function SearchBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchIconPress = () => {
    handleSearch(searchQuery); 
    setSearchQuery('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearchIconPress();
    }
  };

  return (
    <div className="flex items-center justify-between p-3  border-gray-300">
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full">
        <input
          className="flex-1 h-10 focus:outline-none"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={onSearchIconPress} className="ml-2 focus:outline-none">
          <MdSearch size={24} color="black" />
        </button>
      </div>
    </div>
  );
}
