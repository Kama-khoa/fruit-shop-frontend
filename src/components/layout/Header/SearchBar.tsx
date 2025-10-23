'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative group">
        {/* Icon kính lúp */}
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors"
        />

        {/* Ô nhập liệu */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm kiếm sản phẩm..."
          className="
            w-full h-11 pl-11 pr-4 
            bg-gray-50 border border-gray-200 rounded-full 
            text-gray-800 placeholder:text-gray-400 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
            transition-all duration-200
          "
        />

        {/* Nút tìm kiếm */}
        <button
          type="submit"
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            bg-gradient-to-r from-green-500 to-green-600 text-white
            px-5 py-2 rounded-full text-sm font-semibold
            shadow-sm hover:shadow-md hover:brightness-105
            transition-all duration-200
          "
        >
          Tìm kiếm
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
