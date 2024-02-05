import React, { useEffect } from 'react';
import { useState } from 'react';
import MovieList from './components/MovieList';
import "./App.css";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue)=>{
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=743d6f74`;
    const res = await fetch(URL);
    const data = await res.json();
    if(data.Search){
      setMovies(data.Search);
    }
  }
  const addFavouriteMovie = (movie)=>{
    const newFavouriteList = [...favourites, movie];//copy of array. and a new movie object added to the copy
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }
  const removeFavouriteMovie = (movie)=>{
    const newFavouriteList = favourites.filter((favourite)=> favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }
  const saveToLocalStorage = (items)=>{
    //items is an array
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  }
  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue])
  useEffect(()=>{
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    setFavourites(movieFavourites);
  }, [])

  return (
    <div className="container-fluid movie-app">

      <div className='row d-flex align-items-center mt-2 mb-1'>
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="line">
        <MovieList movies = {movies} favouriteComponent = {AddFavourites} handleFavouritesClick = {addFavouriteMovie} />
      </div>

      <div className='row d-flex align-items-center mt-2 mb-1'>
        <MovieListHeading heading="Favourites"/>
      </div>
      <div className="line">
        <MovieList movies = {favourites} favouriteComponent = {RemoveFavourites} handleFavouritesClick = {removeFavouriteMovie} />
      </div>
    </div>
  );
}

export default App;
