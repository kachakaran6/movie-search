// src/MovieSearch.js
import { useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=bda7ec7f`
      );

      if (response.data.Response === "True") {
        // Extract the movie results from the response
        const movieResults = response.data.Search;

        // Set up Fuse.js options for fuzzy search
        const fuse = new Fuse(movieResults, {
          keys: ["Title"], // We only want to search by Title
          threshold: 0.4, // Controls how "fuzzy" the search can be (lower is more strict, higher is more lenient)
        });

        // Perform the fuzzy search
        const fuzzyResults = fuse.search(query);

        // Set the fuzzy-matched results
        const finalMovies = fuzzyResults.map((result) => result.item);

        setMovies(finalMovies);
      } else {
        setMovies([]);
        setError("No movies found!");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F8FF] to-[#052326] p-6">
      <div className="container mx-auto text-white">
        <h1 className="text-5xl font-extrabold text-center mb-12">
          Movie Search
        </h1>

        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            className="w-96 px-6 py-3 rounded-l-xl border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 bg-white text-gray-800"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-purple-700 text-white rounded-r-xl hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-600"
          >
            Search
          </button>
        </form>

        {loading && (
          <p className="text-center text-xl text-gray-300 animate-pulse">
            Loading...
          </p>
        )}

        {error && (
          <p className="text-center text-xl text-red-400 font-semibold">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.length > 0 &&
            movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={movie.Title}
                  className="w-full h-72 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {movie.Title}
                  </h3>
                  <p className="text-lg text-gray-600">{movie.Year}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
