import { createContext, useState } from "react";
import { CartProviderContextProps, Movie } from "./interface";

export const CartContext = createContext({} as CartProviderContextProps);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Omit<Movie, "quantity">) => {
    const existingMovieIndex = movies.findIndex((m) => m.id === movie.id);

    if (existingMovieIndex !== -1) {
      const updatedMovies = [...movies];
      updatedMovies[existingMovieIndex].quantity += 1;
      setMovies(updatedMovies);
      return;
    }

    setMovies([...movies, { ...movie, quantity: 1 }]);
  };

  const handleMovieQuantity = (
    movieId: number,
    quantity: number,
    mustDeleteWhenZero = false
  ) => {
    if (quantity === 0 && mustDeleteWhenZero) {
      removeMovie(movieId);
      return;
    }

    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, quantity } : movie
      )
    );
  };

  const removeMovie = (movieId: number) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  const clearCart = () => {
    setMovies([]);
  };

  const getMovieQuantityById = (movieId: number) => {
    return movies.find((movie) => movie.id === movieId)?.quantity || 0;
  };

  const totalPrice = movies.reduce(
    (acc, acumulator) => acc + acumulator.price * acumulator.quantity,
    0
  );

  const moviesQuantity = movies.reduce(
    (acc, acumulator) => acc + acumulator.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        addMovie,
        handleMovieQuantity,
        removeMovie,
        getMovieQuantityById,
        clearCart,
        movies,
        moviesQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
