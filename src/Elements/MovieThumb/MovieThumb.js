import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = props => {
    return (
        <React.Fragment>
            {
                props.clickable ? 
                (
                    <React.Fragment>
                        <Link className="movie-thumb" to={{ pathname: `/movie/${props.movieId}`, movieName: `${props.movieName}` }}>
                            <img src={props.image} alt="moviethumb" />
                        </Link>
                        <div className="thumb-details-wrapper">
                            <div className="title">
                                <h2>{props.movieName}</h2>
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                        <img src={props.image} alt="moviethumb" />
                )
            }
        </React.Fragment>
    );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string
};

export default MovieThumb;
