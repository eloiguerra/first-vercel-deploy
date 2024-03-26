import styled from "styled-components";

export const CustomCard = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(2)};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius(1)};

  background-color: ${({ theme: { palette } }) => palette.commom.white};
`;
