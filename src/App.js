import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import {movieData} from './Data';

function App() {
const [movies, setMovies] = useState(movieData);
const [filterTitle, setFilterTitle] = useState("");
const [filterRating, setFilterRating] = useState(0)
console.log(movies);
  return (
    <div className="">
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
      <MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating}/>
    </div>
  );
}

export default App;
