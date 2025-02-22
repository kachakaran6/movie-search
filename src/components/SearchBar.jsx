const SearchBar = (searchMovie, setSearchMovie, fetchMovieData) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-full max-w-md">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchMovie} // this should be the string value of the search term
          onChange={(e) => setSearchMovie(e.target.value)} // update state correctly here
          className="w-full py-2 px-4 rounded-lg border border-[#BB95FD] focus:outline-none focus:ring-2 focus:ring-[#83F8E8] placeholder-[#BB95FD] text-gray-800"
        />

        {/* Search Button */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            onClick={fetchMovieData} // Trigger the API call on button click
            className="bg-[#BB95FD] text-white p-2 rounded-lg hover:bg-[#83F8E8] transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
