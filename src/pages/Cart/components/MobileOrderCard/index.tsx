import { Image } from "@/components/images/Image";
import {
  Container,
  Footer,
  FooterTotal,
  OrderContainer,
  ProductContainer,
  ProductInfo,
  ProductInfoPrice,
  ProductPrice,
  ProductSubTotal,
} from "./styles";
import { OrderCardProps } from "../../interface";
import { useCart } from "@/hooks/useCart";
import { Typography } from "@/components/Typography";
import { floatToBrCurrency } from "@/libs/currency";
import { QuantityInput } from "@/components/inputs/QuantityInput";
import { Icon } from "@/components/images/Icon";

import { Divider } from "@/components/display/Divider";
import { Button } from "@/components/buttons/Button";
import { useNavigate } from "react-router-dom";

export const MobileOrderCard = ({
  handleQuantityChange,
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleBlurQuantity,
}: OrderCardProps) => {
  const { movies, totalPrice, removeMovie } = useCart();
  const navigate = useNavigate();

  return (
    <Container>
      {movies.map((movie) => (
        <OrderContainer key={movie.id}>
          <ProductContainer>
            <Image
              src={movie.image}
              alt={movie.title}
              height="82px"
              width="64px"
            />
            <ProductInfo>
              <Typography size="sm" weight="700">
                {movie.title}
              </Typography>
              <QuantityInput
                value={movie.quantity}
                onIncrease={() => handleQuantityIncrease(movie)}
                onDecrease={() => handleQuantityDecrease(movie)}
                onChange={(e) => handleQuantityChange(e, movie)}
                onBlur={() => handleBlurQuantity(movie)}
              />
            </ProductInfo>
            <ProductInfoPrice>
              <ProductPrice>
                <Typography weight="700">
                  {floatToBrCurrency(movie.price * movie.quantity)}
                </Typography>
                <Icon
                  container="button"
                  name="Trash"
                  onClick={() => removeMovie(movie.id)}
                />
              </ProductPrice>
              <ProductSubTotal>
                <Typography color="grey.main" weight="700">
                  SUBTOTAL
                </Typography>
                <Typography weight="700">
                  {floatToBrCurrency(movie.price * movie.quantity)}
                </Typography>
              </ProductSubTotal>
            </ProductInfoPrice>
          </ProductContainer>
        </OrderContainer>
      ))}
      <Divider />
      <Footer>
        <FooterTotal>
          <Typography color="grey.main" weight="700">
            TOTAL
          </Typography>
          <Typography size="xxl" weight="700">
            {floatToBrCurrency(totalPrice)}
          </Typography>
        </FooterTotal>
        <Button onClick={() => navigate("/success")}>
          <Typography size="sm" weight="700" color="commom.white">
            FINALIZAR PEDIDO
          </Typography>
        </Button>
      </Footer>
    </Container>
  );
};
