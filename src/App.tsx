import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "@/router";
import { GlobalStyles, theme } from "@/theme";
import { CartProvider } from "./context/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
