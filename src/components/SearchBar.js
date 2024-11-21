import React, { useState } from "react";

function SearchBar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState();
  return (
    <div className="sm:w-[200px] lg:w-[400px]">
      <input
        className="w-full p-1 border border-zinc-500 rounded-md text-[12px] placeholder:text-[12px]"
        placeholder="Search here..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
