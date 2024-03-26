import { Typography } from "@/components/Typography";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme: { palette } }) => palette.commom.white};
  width: 100%;

  height: 90dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;

export const ButtonContainer = styled.div`
  max-width: 173px;
`;

export const Title = styled(Typography)`
  @media (min-width: ${({
      theme: {
        breakpoints: {
          values: { xs },
        },
      },
    }) => `${xs}px`}) {
    text-align: center;
  }
`;
