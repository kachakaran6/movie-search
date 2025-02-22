import { useState } from "react";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);
  // const api = process.env.REACT_APP_API;

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=bda7ec7f"
      );
      const data = await res.json();
      setAllMovieData(data);
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
        searchMovie={searchMovie}
        setSearchMovie={searchMovie}
        fetchMovieData={fetchMovieData}
      />
      <MovieCard allMovieData={allMovieData} loading={loading} />
    </div>
  );
}

export default App;
