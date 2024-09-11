import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraBaseProvider,
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
