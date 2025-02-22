import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    if (!searchQuery) return;

    setLoading(true);

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=bda7ec7f`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  return (
    <div className="App bg-[#11131e] text-white min-h-screen">
      <Navbar />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        fetchMovies={fetchMovies}
      />
      {loading ? <p>Loading...</p> : <MovieCard movies={movies} />}
    </div>
  );
}

export default App;
