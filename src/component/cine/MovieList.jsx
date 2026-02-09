import { getAllMovies } from "../../data/Movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = getAllMovies();
  console.log(movies, "movies");

  return (
    <div>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
