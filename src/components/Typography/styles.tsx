import styled from "styled-components";
import { CustomTypographyProps } from "./interface";

const DEFAULT_SIZE = "md";
const DEFAULT_WEIGHT = "normal";
const DEFAULT_ALIGN = "left";

export const CustomTypography = styled.p<CustomTypographyProps>`
  font-size: ${(props) =>
    props.theme.typography.size[props.$size || DEFAULT_SIZE]};
  font-weight: ${(props) =>
    props.theme.typography.weight[props.$weight || DEFAULT_WEIGHT]};

  color: ${({ $color, theme: { palette } }) => {
    if (!$color) return palette.commom.black;

    const [scale, subScale] = $color.split(".");

    if (!palette[scale] || !palette[scale][subScale])
      return palette.commom.black;

    return palette[scale][subScale];
  }};

  text-align: ${(props) => props.$align || DEFAULT_ALIGN};
`;
