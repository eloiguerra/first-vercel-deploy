import { Outlet, useNavigate } from "react-router-dom";

import { Icon } from "@/components/images/Icon";

import { useCart } from "@/hooks/useCart";

import {
  CartResumeContainer,
  CartResumeItems,
  CartResumeTitle,
  Container,
  Header,
  Logo,
  Main,
  QuantityInCart,
} from "./styles";

export const MainLayout = () => {
  const { moviesQuantity } = useCart();

  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Logo
          size="xl"
          weight="700"
          color="commom.white"
          onClick={() => navigate("home")}
        >
          WeMovies
        </Logo>
        <CartResumeContainer>
          <CartResumeItems>
            <CartResumeTitle size="sm" weight="600" color="commom.white">
              Meu Carrinho
            </CartResumeTitle>
            <QuantityInCart size="xs" weight="600">
              {moviesQuantity} Itens
            </QuantityInCart>
          </CartResumeItems>
          <Icon container="link" to="cart" name="Basket" />
        </CartResumeContainer>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
