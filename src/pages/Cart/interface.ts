import { Movie } from "@/context/CartContext/interface";

export interface OrderCardProps {
  handleQuantityChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    movie: Movie
  ) => void;
  handleQuantityIncrease: (movie: Movie) => void;
  handleQuantityDecrease: (movie: Movie) => void;
}
