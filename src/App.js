import React from 'react';
import './App.css';
import Movie from './Movie'

const movieTitles = [
  "Starwars",
  "Memento",
  "Batman",
  "The Avengers"
]

const movieImages = [
  "https://media.comicbook.com/2019/10/star-wars-the-rise-of-skywalker-final-trailer-1192360-1280x0.jpeg",
  "https://www.kanopy.com/sites/default/files/imagecache/vp_thumbnail_extremly_large/video-assets/2485021_landscape.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg",
  "https://movietheaterprices.com/wp-content/uploads/2018/10/The-Avengers-4-1024x506.png"
]

function App() {
  return (
    <div className="App">
      <Movie title = {movieTitles[0]} poster = {movieImages[0]}/>     
      <Movie title = {movieTitles[1]} poster = {movieImages[1]}/> 
      <Movie title = {movieTitles[2]} poster = {movieImages[2]}/> 
      <Movie title = {movieTitles[3]} poster = {movieImages[3]}/>  
    </div>
  );
}

export default App;
