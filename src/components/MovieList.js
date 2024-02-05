import React from "react";  

export default function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;//component passed as props

  return (
    <>
        {props.movies.map((movie, index)=>{
            return <div className="image-container d-flex justify-content-start m-3 height">
                <img src={movie.Poster} key={index} alt=""/>

                <div onClick = {()=> props.handleFavouritesClick(movie)}className="overlay d-flex align-items-center justify-content-center">
                  <FavouriteComponent/>
                </div>

            </div>
        })}
    </>
  )
}
