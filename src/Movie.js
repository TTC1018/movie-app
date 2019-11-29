import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>{this.props.title}</h1>
            </div>

        )
    }

}

class MoviePoster extends Component{
    render(){
        return(
            <img src = "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg"/>
        )
    }
}


export default Movie