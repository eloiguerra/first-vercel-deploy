export interface ListMoviesResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export enum MoviesQueryKey {
  list = "movie-list",
}
