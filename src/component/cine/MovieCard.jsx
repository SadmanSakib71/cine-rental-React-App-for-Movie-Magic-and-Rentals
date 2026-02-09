import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../../context/AllContext";
import { getImageUrl } from "../../utills/cine-util";
import MovieModal from "./MovieModal";
import Ratting from "./Ratting";

const MovieCard = ({ movie }) => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (movie) => {
    const found = cartData.find((item) => item.id === movie.id);

    if (!found) {
      setCartData([...cartData, movie]);
      toast.success("Successfully Added");
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`,
      );
    }
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowMovieModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  return (
    <div>
      {showMovieModal && (
        <MovieModal movie={selectedMovie} onClose={handleModalClose} />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          onClick={() => handleMovieSelection(movie)}
          className="w-full object-cover cursor-pointer"
          src={getImageUrl(movie.cover)}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Ratting value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={() => handleAddToCart(movie)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default MovieCard;
