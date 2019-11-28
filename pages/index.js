import React, { useState, useEffect } from 'react';
import MovieApi from '../services/MovieApi';
import Layout from '../components/layout';

export default function Index() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const parseMovies = (array) => {
      console.log(array)
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
      const data = await movieAPI.getMovies(category,page_number);
      const movies = parseMovies(data); //function defined above...
      setMovies(movies);
  }

  const getMoviesOnSearch = async (search, page_number=1) => {
      setSearch(search);
      const data = await movieAPI.getMoviesSearch(search, page_number);
      const movies = parseMovies(data);//function defined above...
      setMovies(movies)
  }

  //general function to decide what to do
  const onSearch = (searchString=undefined) => {
      const validated = searchString==='' ? undefined : searchString; //EMPTY BY DEFAULT.
      setPage(1);//if a search (or blank search) is done, reset page 1
      if(validated){
          getMoviesOnSearch(validated); 
      } else{ //this executes when user hasn't input any search string.
          getMovies('top_rated');
      }
  }

  const onPageChange = (page) => {
      console.log(page);
      setPage(page);
      if(search){
          getMoviesOnSearch(search, page);
      } else{
          getMovies('top_rated', page);
      }
  }

  useEffect(()=>{onSearch()}, []); //first "search" is blank, so we just bring a main page

  return (
    <Layout>
      <h1>Pelis Pelis</h1>
      <p>
      Lorem fistrum sexuarl se calle ustée elit condemor officia. Diodenoo diodeno mamaar incididunt de la pradera te voy a borrar el cerito officia ut ut apetecan por la gloria de mi madre. Jarl ex pecador aute aute laboris ullamco officia.
      </p>
    </Layout>
  );
}