import React, {useState} from "react";
import MovieCard from "./movieCard";

export default function SearchMovies() {

  // states - input query, movies
  // using useState which is a hook and lets you use states in a class way but in a function

  const [query, setQuery] = useState('');
  // movies will be an array so we pass it an empty array
  const [movie, setMovie] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=9563fbf0d02687cd2dc2c62ca0e00e59&language=en-US&query=${query}&page=1&include_adult=false`;

    // try the fetch request and output errors to console
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    }catch(err) {
      console.error(err);
    }

  }

  // empty tag bc jsx only allows one root tag on return
  // form calls function searchMovies which prevents default
  // map needs to give a unique key for each thing, so we use movie id
  // use filter to only show movies with posters
  // separate the movie card into its own component

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="Search movies" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {(movie != null && movie.length) ?
          movie.filter(m => m.poster_path).map(m => (
          <MovieCard movie={m} />
        )) :
        <p>No results found</p>}
      </div>
    </>
  );
}
