import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
  title : "Starwars",
  poster : "https://media.comicbook.com/2019/10/star-wars-the-rise-of-skywalker-final-trailer-1192360-1280x0.jpeg"
  },
  {
  title : "Memento",
  poster : "https://www.kanopy.com/sites/default/files/imagecache/vp_thumbnail_extremly_large/video-assets/2485021_landscape.jpg"
  },
  {
  title : "Batman",
  poster : "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg"
  },
  {
  title : "The Avengers",
  poster : "https://movietheaterprices.com/wp-content/uploads/2018/10/The-Avengers-4-1024x506.png"
  }
]

class App extends Component {
  render(){ 
    return (
    <div className="App">
      {movies.map(movie => {
        return <Movie title = {movie.title} poster = {movie.poster} />
      })} 
    </div>
    );
  } 
}

export default App;
