import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
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
          },
          {
            title : "Transformer",
            poster : "http://1.bp.blogspot.com/-Bn-WPnjvtHk/TfkiCQ78YBI/AAAAAAAAAiY/iMpcmVco6ow/s1600/Transformers-Dark-of-the-Moon-Poster-62.jpg"
          }
        ]
      })
    }, 3000)
  }


  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key = {index} />
    })
    return movies
  }

  render(){ 
    return (
    <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading'} 
    </div>
    );
  } 
}

export default App;
