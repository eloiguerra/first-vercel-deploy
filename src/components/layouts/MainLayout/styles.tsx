import styled from "styled-components";

import { Typography } from "@/components/Typography";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  max-width: 1080px;

  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => `0 ${spacing(2)}`};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  /* padding: ${({ theme: { spacing } }) => `${spacing(3)} ${spacing(2)}`}; */
  padding: ${({ theme: { spacing } }) => `${spacing(3)} 0`};
`;

export const CartResumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;

export const CartResumeTitle = styled(Typography)`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const CartResumeItems = styled.div`
  margin-right: ${({ theme: { spacing } }) => spacing(1)};
  display: flex;
  flex-direction: column;
`;

export const QuantityInCart = styled(Typography)`
  margin-left: auto;
  color: ${({ theme: { palette } }) => palette.grey.main};
`;

export const Main = styled.main`
  overflow-y: auto;
`;

export const Logo = styled(Typography)`
  cursor: pointer;
`;
