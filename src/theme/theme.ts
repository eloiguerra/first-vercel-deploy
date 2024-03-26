import { createGlobalStyle } from "styled-components";
import { Theme } from "./interface";

export const theme: Theme = {
  borderRadius: (radius: number) => `${radius * 4}px`,
  spacing: (space: number) => `${space * 8}px`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    family: ["Open Sans", "sans-serif"],
    size: {
      xxl: "24px",
      xl: "20px",
      lg: "18px",
      md: "16px",
      sm: "14px",
      xs: "12px",
    },
    weight: {
      "700": 700,
      "600": 600,
      "500": 400,
      "400": 400,
      "300": 300,
      "200": 200,
      "100": 100,
    },
  },
  palette: {
    commom: {
      white: "#ffffff",
      black: "#000000",
    },
    primary: {
      dark: "#0073A1",
      main: "#009EDD",
    },
    success: {
      main: "#039B00",
    },
    grey: {
      dark: "#2F2E41",
      main: "#999999",
      light: "#D9D9D9",
    },
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.typography.family.join(",")};
    color: ${theme.palette.commom.black}
  }

  body {
    background-color: ${theme.palette.grey.dark};
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;
