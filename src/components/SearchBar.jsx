const SearchBar = (searchMovie, setSearchMovie, fetchMovieData) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-full max-w-md">
        {/* <!-- Search Input --> */}
        <input
          type="text"
          placeholder="Search..."
          value={searchMovie}
          onChange={(e) => searchMovie(e.target.value)}
          className="w-full py-2 px-4 rounded-lg border border-[#BB95FD] focus:outline-none focus:ring-2 focus:ring-[#83F8E8] placeholder-[#BB95FD] text-gray-800"
        />

        {/* <!-- Search Icon --> */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            onClick={fetchMovieData}
            className="w-5 h-5 text-[#BB95FD]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 14a7 7 0 007-7 7 7 0 00-7 7z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
