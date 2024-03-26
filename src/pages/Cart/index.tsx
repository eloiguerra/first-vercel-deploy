import { useCart } from "@/hooks/useCart";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Movie } from "@/context/CartContext/interface";

import { DesktopOrderCard } from "./components/DesktopOrderCard";
import { MobileOrderCard } from "./components/MobileOrderCard";
import { NoContent } from "@/components/display/NoContent";

function Cart() {
  const { handleMovieQuantity, movies, removeMovie } = useCart();
  const isMobile = useMediaQuery("sm");

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    movie: Movie
  ) => {
    handleMovieQuantity(movie.id, Number(event.target.value));
  };

  const handleQuantityIncrease = (movie: Movie) => {
    handleMovieQuantity(movie.id, movie.quantity + 1);
  };

  const handleQuantityDecrease = (movie: Movie) => {
    if (movie.quantity === 0) return;

    handleMovieQuantity(movie.id, movie.quantity - 1, true);
  };

  const handleBlurQuantity = (movie: Movie) => {
    if (movie.quantity > 0) return;

    removeMovie(movie.id);
  };

  if (!movies.length) return <NoContent />;

  return isMobile ? (
    <MobileOrderCard
      handleQuantityChange={handleQuantityChange}
      handleQuantityDecrease={handleQuantityDecrease}
      handleQuantityIncrease={handleQuantityIncrease}
      handleBlurQuantity={handleBlurQuantity}
    />
  ) : (
    <DesktopOrderCard
      handleQuantityChange={handleQuantityChange}
      handleQuantityDecrease={handleQuantityDecrease}
      handleQuantityIncrease={handleQuantityIncrease}
      handleBlurQuantity={handleBlurQuantity}
    />
  );
}

export default Cart;
