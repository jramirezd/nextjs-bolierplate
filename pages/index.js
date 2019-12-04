import React, { useState, useEffect } from 'react';
import MovieApi from '../services/MovieApi';
import Layout from '../components/layout';

export default function Index() {
  const [movies, setMovies] = useState([]);

  const parseMovies = (array) => {
      const movies = array.results.map( (movie)=>{
          return {
              path: movie.poster_path,
              title: movie.title,
              id: movie.id                
          }
      })
      return movies;
  }

  //get movies function in case no search string was provided... 
  const getMovies = async (category, page_number=1) => {
      const data = await MovieApi.getMovies(category,page_number);
      const movies = parseMovies(data);
      console.log(movies);
      setMovies(movies);
  }

  const onSearch = () => {
        getMovies('top_rated'); 
}

  useEffect(()=>{onSearch()}, []);
  return (
    <Layout>
      <h1>Pelis Pelis</h1>
      <p>
      Lorem fistrum sexuarl se calle ustée elit condemor officia. Diodenoo diodeno mamaar incididunt de la pradera te voy a borrar el cerito officia ut ut apetecan por la gloria de mi madre. Jarl ex pecador aute aute laboris ullamco officia.
      </p>
      <ul className="movieList">
        {movies.map(function(movie) {
        return <li key={movie.id}>{movie.title}</li>;
        })}
       </ul>
    </Layout>
  );
}