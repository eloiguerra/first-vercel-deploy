import { Card } from "@/components/display/Card";
import styled from "styled-components";

export const Container = styled.div`
  /* overflow-y: auto; */
  width: 100%;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media (max-width: 425px) {
    /* grid-template-columns: repeat(1, 1fr); */

    /* grid-template-columns: repeat(auto-fill, 1fr); */
  }

  gap: ${({ theme: { spacing } }) => spacing(3)};
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(0.5)};

  margin-right: ${({ theme: { spacing } }) => spacing(1.5)};

  color: ${({ theme: { palette } }) => palette.commom.white};
`;

export const MovieCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;
