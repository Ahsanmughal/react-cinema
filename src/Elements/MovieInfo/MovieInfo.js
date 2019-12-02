import React from "react";
import { IMAGE_BASE_URL } from "../../utils/config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stars from 'react-rating';
import FavouriteBtn from '../Favourites/Favourites';
import "./MovieInfo.css";

const MovieInfo = props => {
  return (
    <div className="wrapper">
      <div className="movie-wrapper">
        <div className="image-wrapper">
          <img className="movie-image" src={`${IMAGE_BASE_URL}w780${props.movie.poster_path}`} alt="moviethumb" />
        </div>
        <div className="movie-details">
          <div className="header-wrapper">
            <div className="title"> 
              <h1>{props.movie.title}</h1>
            </div>
            <div className="subtitle">
              <h2>{props.movie.tagline}</h2>
            </div>
          </div>
          <div className="details-wrapper">
            <div className="ratings-wrapper">
            <Stars
              emptySymbol={<FontAwesomeIcon icon={['far', 'star']} size="lg" />}
              fullSymbol={<FontAwesomeIcon icon={['fas', 'star']} size="lg" />}
              initialRating={props.movie.vote_average / 2}
              readonly
            />
            <div className="ratings-number">
              <p>
                {props.movie.vote_average}
              </p>
            </div>
            </div>
            <div className="info">
              { 
                props.movie.spoken_languages ?  
                renderInfo( props.movie.spoken_languages, props.movie.runtime, splitYear(props.movie.release_date)) : null
              }
            </div>
          </div>
          <FavouriteBtn movie={props.movie}/>
          <div  className="heading">
            <h3>The Genres</h3>
          </div>
          <div className="links-wrapper">
            {
              props.movie.genre ? 
              renderGenres(props.movie.genres) : null
            }
          </div>
          <div className="heading">
            <h3>Overview</h3>
          </div>
          <div className="text">
            <p>
              {
                props.movie.overview ? props.movie.overview: 'There is no overview available...'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function renderInfo(languages, time, data) {
  const info = [];
  if (languages.length !== 0) {
    info.push(languages[0].name);
  }
  info.push(time, data);
  return info
    .filter(el => el !== null)
    .map(el => (typeof el === 'number' ? `${el} min.` : el))
    .map((el, i, array) => (i !== array.length - 1 ? `${el} / ` : el));
}


// Function to get the year only from the date
function splitYear(date) {
  if (!date) {
    return;
  }
  const [year] = date.split('-');
  return year;
}

// Render Genres with links
function renderGenres(genres) {
  return genres.map(genre => (
    <div className="styled-link" key={genre.id}>
      <FontAwesomeIcon icon={['fas', 'dot-circle']} size="sm" />
      <span> {genre.name}</span>
    </div>
  ));
}

export default MovieInfo;
