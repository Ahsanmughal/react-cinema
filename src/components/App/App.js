import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../Elements/Header/Header";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import FavouritesMovies from '../Favourites/Favourites';
import NotFound from "../../Elements/NotFound/NotFound";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPoll,faHeart, faDotCircle, faStar as fasFaStar, faSearch, faLink,faPlay} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
library.add( fab,faPoll,faHeart, faDotCircle, fasFaStar, farFaStar, faSearch, faLink, faPlay);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/movie/:movieId" component={Movie} exact />
            <Route path="/favourites" component={FavouritesMovies} exact/>
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
