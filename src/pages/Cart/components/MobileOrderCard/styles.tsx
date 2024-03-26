import { Card } from "@/components/display/Card";
import styled from "styled-components";

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(3)};

  min-width: 375px;

  @media (min-width: ${({
      theme: {
        breakpoints: {
          values: { sm },
        },
      },
    }) => `${sm}px`}) {
    display: none;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${({ theme: { spacing } }) => spacing(2)};
`;

export const ProductInfoPrice = styled(ProductInfo)`
  margin-left: auto;
`;

export const ProductPrice = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing(2)};
`;

export const ProductSubTotal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(2)};
`;

export const FooterTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
