

const MovieList = ({ movies }) => {
  return (
    <>
      <h2>Beer List</h2>
        {movies.map(movie => <div key={movie.id} movie={movie} />)}
    </>
  );
};

export default MovieList;