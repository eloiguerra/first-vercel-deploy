import styled from "styled-components";

import { CustomDividerProps } from "./interface";

export const CustomDivider = styled.hr<CustomDividerProps>`
  width: ${({ $orientation }) =>
    $orientation === "horizontal" ? "100%" : "1px"};
  height: ${({ $orientation }) =>
    $orientation === "horizontal" ? "1px" : "100%"};

  background-color: ${({ theme: { palette } }) => palette.grey.main};
`;
