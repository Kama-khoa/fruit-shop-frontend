'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full h-8 relative">
      <div className="w-full h-full bg-white rounded-2xl border border-neutral-500 flex items-center px-4">
        <Search className="w-4 h-4 text-neutral-400 mr-2 flex-shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm kiếm sản phẩm"
          className="flex-1 bg-transparent outline-none text-neutral-400 text-base font-normal font-['IBM_Plex_Serif'] placeholder:text-neutral-400"
        />
      </div>
    </form>
  );
};

export default SearchBar;