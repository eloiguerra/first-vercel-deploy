import http from "@/services/http";

import { ListMoviesResponse } from "./interface";

const MOVIE_PATH = "/movies";

export async function listMovies() {
  return http.get<ListMoviesResponse>(MOVIE_PATH);
}
