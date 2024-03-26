import { Typography } from "@/components/Typography";
import { Image } from "@/components/images/Image";

import { Container, MovieCard, Quantity } from "./styles";
import { Button } from "@/components/buttons/Button";
import { Icon } from "@/components/images/Icon";
import { useCart } from "@/hooks/useCart";
import { useMovie } from "./useMovie";
import { floatToBrCurrency } from "@/libs/currency";
import { CircularLoader } from "@/components/loaders/Circular";
import { NoContent } from "@/components/display/NoContent";

function Home() {
  const { response, isError, isLoading, refetch } = useMovie();
  const { getMovieQuantityById, addMovie } = useCart();

  if (isLoading) return <CircularLoader />;

  if (isError || !response?.data.products.length)
    return <NoContent refresh={refetch} />;

  return (
    <Container>
      {response.data.products.map((movie) => {
        const movieQuantity = getMovieQuantityById(movie.id);
        return (
          <MovieCard key={movie.id}>
            <Image
              src={movie.image}
              alt={movie.title}
              width="147px"
              height="188px"
            />
            <Typography size="xs" weight="700" align="center">
              {movie.title}
            </Typography>
            <Typography size="md" weight="700" align="center">
              {floatToBrCurrency(movie.price)}
            </Typography>
            <Button
              fullWidth
              onClick={() => addMovie(movie)}
              variant={movieQuantity ? "success" : "primary"}
            >
              <Quantity>
                <Icon name="Cart" />
                <Typography size="xs" weight="400" color="commom.white">
                  {movieQuantity}
                </Typography>
              </Quantity>
              <Typography size="xs" weight="700" color="commom.white">
                ADICIONAR AO CARRINHO
              </Typography>
            </Button>
          </MovieCard>
        );
      })}
    </Container>
  );
}

export default Home;
