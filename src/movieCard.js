import React from 'react';

export default function MovieCard(props){

  // instead of MovieCard(props), can use MovieCard({movie}) and directly reference it

  return(
    <div className="card" key={props.movie.id}>
      <img className="card__image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`} alt={props.movie.title + 'poster'} />
      <div className="card__content">
        <h3 className="card__title">{props.movie.title}</h3>
        <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
        <p><small>RATING: {props.movie.vote_average}</small></p>
        <p className="card__desc">{props.movie.overview}</p>
      </div>
    </div>
  );
}
