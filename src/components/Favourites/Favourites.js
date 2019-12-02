import React, { Component } from "react";
import "./Favourites.css";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/config";
import FourColGrid from "../../Elements/FourColGrid/FourColGrid";
import MovieThumb from "../../Elements/MovieThumb/MovieThumb";
import { Link } from "react-router-dom";

class FavouritesMovies extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        this.setState({ loading: true });
        this.fetchItems();
    }

    fetchItems() {
        let myArray = JSON.parse(localStorage.getItem('favorites'));
        if(myArray.length > 0) {
            this.setState({
                movies: [...myArray]
            })
        } else {
            console.log('no movie found');
        }
    };

    render() {
        return (
            <div className="home">
                <div className="rmdb-navigation">
                    <div className="rmdb-navigation-content">
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <p>/</p>
                        <p>Favourites</p>
                    </div>
                </div>
                <div className="home-grid">
                    <FourColGrid header="Favourites" loading={this.state.loading}>
                        {
                            this.state.movies.map((element, i) => {
                                return (
                                    <MovieThumb
                                        key={i}
                                        clickable={true}
                                        image={
                                            element.poster_path
                                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}`
                                            : "./images/no_image.jpg"
                                        }
                                        movieId={element.id}
                                        movieName={element.original_title}/>
                                );
                            })
                        }
                    </FourColGrid>
                </div>
            </div>
        );
    }
}

export default FavouritesMovies;