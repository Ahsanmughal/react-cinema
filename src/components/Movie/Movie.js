import React, { Component } from "react";
import { API_URL, API_KEY } from "../../utils/config";
import Navigation from "../../Elements/Navigation/Navigation";
import MovieInfo from "../../Elements/MovieInfo/MovieInfo";
import "./Movie.css";

class Movie extends Component {
  state = {
    movie: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/${ this.props.match.params.movieId}?api_key=${API_KEY}`;
    this.fetchMovieData(endpoint);
  }

  fetchMovieData = endpoint => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      if (result.status_code) {
        this.setState({ loading: false });
      } else {
        this.setState(
          {
            movie: result
          },
        );
      }
    })
    .catch(error => console.error("Error: ", error));
  };

  render() {
    return (
      <div>
        {this.state.movie ? (
          <div>
            <Navigation movie={this.state.movie.title} />
            <MovieInfo movie={this.state.movie} />
          </div>
        ) : null}
        { !this.state.loading ? ( <h1>No Movie Found!</h1>) : null}
      </div>
    );
  }
}

export default Movie;
