import { Typography } from "@/components/Typography";

import {
  Container,
  Footer,
  Header,
  Order,
  OrderContainer,
  ProductContainer,
  ProductInfo,
  SubTotalContainer,
  Total,
} from "./styles";
import { OrderCardProps } from "../../interface";
import { floatToBrCurrency } from "@/libs/currency";
import { useCart } from "@/hooks/useCart";
import { Image } from "@/components/images/Image";
import { QuantityInput } from "@/components/inputs/QuantityInput";
import { Icon } from "@/components/images/Icon";

import { Button } from "@/components/buttons/Button";
import { CardFooterDivider } from "../styles";
import { useNavigate } from "react-router-dom";

export const DesktopOrderCard = ({
  handleQuantityChange,
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleBlurQuantity,
}: OrderCardProps) => {
  const { movies, totalPrice, removeMovie } = useCart();
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Typography color="grey.main" weight="700">
          PRODUTO
        </Typography>
        <Typography color="grey.main" weight="700">
          QTD
        </Typography>
        <Typography color="grey.main" weight="700">
          SUBTOTAL
        </Typography>
      </Header>
      <OrderContainer>
        {movies.map((movie) => (
          <Order key={movie.id}>
            <ProductContainer>
              <Image
                src={movie.image}
                alt={movie.title}
                maxHeight="114px"
                width="91px"
              />
              <ProductInfo>
                <Typography size="sm" weight="700">
                  {movie.title}
                </Typography>
                <Typography size="lg" weight="700">
                  {floatToBrCurrency(movie.price)}
                </Typography>
              </ProductInfo>
            </ProductContainer>

            <QuantityInput
              value={movie.quantity}
              onIncrease={() => handleQuantityIncrease(movie)}
              onDecrease={() => handleQuantityDecrease(movie)}
              onChange={(e) => handleQuantityChange(e, movie)}
              onBlur={() => handleBlurQuantity(movie)}
            />
            <SubTotalContainer>
              <Typography weight="700">
                {floatToBrCurrency(movie.price * movie.quantity)}
              </Typography>
              <Icon
                container="button"
                name="Trash"
                onClick={() => removeMovie(movie.id)}
              />
            </SubTotalContainer>
          </Order>
        ))}
      </OrderContainer>

      <CardFooterDivider />

      <Footer>
        <Button onClick={() => navigate("/success")}>
          <Typography size="sm" weight="700" color="commom.white">
            FINALIZAR PEDIDO
          </Typography>
        </Button>
        <Total>
          <Typography color="grey.main" weight="700">
            TOTAL
          </Typography>
          <Typography size="xxl" weight="700">
            {floatToBrCurrency(totalPrice)}
          </Typography>
        </Total>
      </Footer>
    </Container>
  );
};
