import styled from "styled-components";

import { CustomGridColumnProps } from "./interface";

// Define a Grid container component
export const CustomContainer = styled.div`
  width: 100%;
`;

export const CustomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CustomColumn = styled.div<CustomGridColumnProps>`
  flex: 0 0 auto;
  width: ${(props) => (props.$xs ? `${(props.$xs / 12) * 100}%` : "100%")};

  @media (min-width: ${({
      theme: {
        breakpoints: {
          values: { sm },
        },
      },
    }) => `${sm}px`}) {
    width: ${(props) => props.$sm && `${(props.$sm / 12) * 100}%`};
  }
  @media (min-width: ${({
      theme: {
        breakpoints: {
          values: { md },
        },
      },
    }) => `${md}px`}) {
    width: ${(props) => props.$md && `${(props.$md / 12) * 100}%`};
  }
  @media (min-width: ${({
      theme: {
        breakpoints: {
          values: { lg },
        },
      },
    }) => `${lg}px`}) {
    width: ${(props) => props.$lg && `${(props.$lg / 12) * 100}%`};
  }
  @media (min-width: ${({
      theme: {
        breakpoints: {
          values: { xl },
        },
      },
    }) => `${xl}px`}) {
    width: ${(props) => props.$xl && `${(props.$xl / 12) * 100}%`};
  }
`;
