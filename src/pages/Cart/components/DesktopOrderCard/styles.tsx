import { Card } from "@/components/display/Card";

import styled from "styled-components";

export const Container = styled(Card)`
  @media (max-width: ${({
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
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Order = styled.div`
  display: grid;
  grid-template-columns: 30% 35% 35%;
  align-items: center;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 30% 35% 35%;

  margin-bottom: ${({ theme: { spacing } }) => spacing(3.5)};
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(2)};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;

export const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.div`
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  align-items: center;
`;
