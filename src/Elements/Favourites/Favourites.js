import React, { Component } from "react";
import "./Favourites.css";

class FavouriteBtn extends Component {
    myArray = JSON.parse(localStorage.getItem('favorites')) || [];
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
        for(let  i=0; i < this.myArray.length; i++) {
            if(this.props.movie.id === this.myArray[i].id) {
                this.state = {isToggleOn: false}
            }
        }
    }
    
    handleClick() {
        if(this.state.isToggleOn === true) {
            this.myArray.push(this.props.movie);
        } else {
            for(let  i=0; i < this.myArray.length; i++) {
                if(this.props.movie.id === this.myArray[i].id) {
                    let index = this.myArray.indexOf(this.myArray[i])
                    this.myArray.splice(index, 1);     
                }
            }
        }
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
         localStorage.setItem('favorites', JSON.stringify(this.myArray));
    }
    
    render() {
        return  (
            <button className="brick" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Add' : 'Remove'} Favourite
            </button>
        );
    }
}

export default FavouriteBtn;