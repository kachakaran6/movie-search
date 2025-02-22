const SearchBar = (searchQuery, setSearchQuery, fetchMovies) => {
  return (
    <div className="search-bar mt-8 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 px-4 rounded-lg border border-[#BB95FD] focus:outline-none focus:ring-2 focus:ring-[#83F8E8] placeholder-[#BB95FD] text-gray-800"
        />
        <button
          onClick={fetchMovies}
          className="absolute inset-y-0 right-0 pr-3 text-[#BB95FD] hover:text-[#83F8E8]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
