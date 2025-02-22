import { useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState(""); // this should be a string
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    if (!searchMovie) {
      alert("Please enter a search term.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchMovie}&apikey=bda7ec7f`
      );
      const data = await res.json();
      setAllMovieData(data.Search || []); // Assuming data.Search contains an array of movies
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#11131e]">
      <Navbar />
      <SearchBar
        searchMovie={searchMovie} // This should be the search string
        setSearchMovie={setSearchMovie} // Pass the setter function
        fetchMovieData={fetchMovieData}
      />
      <MovieCard allMovieData={allMovieData} loading={loading} />
    </div>
  );
}

export default App;
