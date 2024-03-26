import { listMovies } from "@/api/movies";
import { MoviesQueryKey } from "@/api/movies/interface";
import { useQuery } from "@tanstack/react-query";

export const useMovie = () => {
  const { data, refetch, isError, isLoading } = useQuery({
    queryKey: [MoviesQueryKey.list],
    queryFn: listMovies,
  });

  return {
    response: data,
    isError,
    isLoading,
    refetch,
  };
};
