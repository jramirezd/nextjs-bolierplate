

const MovieList = ({ movies }) => {
  return (
    <ul className="movieList">
    {movies.map( (movie) => {
        return <li>{movie} - {movie.id}</li>
    })}
  </ul>
  );
};

export default MovieList;