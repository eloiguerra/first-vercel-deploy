export interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartProviderContextProps {
  addMovie: (movie: Omit<Movie, "quantity">) => void;
  removeMovie: (movieId: number) => void;
  getMovieQuantityById: (movieId: number) => number;
  handleMovieQuantity: (movieId: number, quantity: number) => void;
  clearCart: () => void;

  movies: Movie[];
  moviesQuantity: number;
  totalPrice: number;
}
