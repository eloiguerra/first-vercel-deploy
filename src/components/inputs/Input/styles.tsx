import styled from "styled-components";

export const CustomInput = styled.input`
  border: ${({ theme: { palette } }) => `1px solid ${palette.grey.light}`};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius(1)};
  padding: ${({ theme: { spacing } }) => spacing(2)};

  width: 100%;
  outline: none;
`;
