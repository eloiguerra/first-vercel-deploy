import { Typography } from "@/components/Typography";
import styled from "styled-components";

export const Container = styled.div`
  height: 90dvh;

  background-color: ${({ theme: { palette } }) => palette.commom.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(3)};
`;

export const ButtonContainer = styled.div`
  width: 100%;
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
