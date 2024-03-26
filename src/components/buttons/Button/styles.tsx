import styled from "styled-components";
import { CustomButtonProps } from "./interface";

export const CustomButton = styled.button<CustomButtonProps>`
  padding: ${({ theme: { spacing } }) => spacing(1)};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius(1)};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "inherit")};
  height: 40px;

  color: ${({ theme: { palette } }) => palette.commom.white};
  background-color: ${({ $variant, theme: { palette } }) => {
    if ($variant === "success") return palette.success.main;

    return palette.primary.main;
  }};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ $variant, theme: { palette } }) => {
      if ($variant === "success") return palette.success.main;

      return palette.primary.dark;
    }};
  }

  transition: all 0.3s ease-out;
`;
