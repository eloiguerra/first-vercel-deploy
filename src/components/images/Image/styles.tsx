import styled from "styled-components";
import { CustomImageProps } from "./interface";

export const CustomImage = styled.img<CustomImageProps>`
  object-fit: contain;

  height: ${(props) => {
    if (props.$fullHeight) return "100%";

    if (props.height) return props.height;

    return "inherit";
  }};

  width: ${(props) => {
    if (props.$fullWidth) return "100%";

    if (props.width) return props.width;

    return "inherit";
  }};

  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "inherit")};
  max-height: ${(props) => (props.$maxHeight ? props.$maxHeight : "inherit")};
`;
