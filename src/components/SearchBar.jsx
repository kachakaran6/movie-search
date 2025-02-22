function SearchBar(searchMovie, setSearchMovie, fetchMovieData) {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-full max-w-md">
        {/* <!-- Search Input --> */}
        <input
          type="text"
          placeholder="Search..."
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)} // Fixed to set state
          className="w-full py-2 px-4 rounded-lg border border-[#BB95FD] focus:outline-none focus:ring-2 focus:ring-[#83F8E8] placeholder-[#BB95FD] text-gray-800"
        />

        {/* <!-- Search Button --> */}
        <button
          onClick={fetchMovieData}
          className="absolute inset-y-0 right-0 flex items-center pr-3 bg-[#BB95FD] text-white rounded-lg px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
