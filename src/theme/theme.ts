"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const primary = {
  main: "#23A6F0",
  light: "#8EC2F2",
  contrastText: "white",
};

const secondary = {
  main: "#23856D",
};

const custom = {
  main: "#252B42",
  light: "#737373",
  dark: "#A29415",
  contrastText: "#BDBDBD",
};

const cBackground = {
  main: "#FAFAFA",
};

declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
  }
  interface PaletteOptions {
    custom: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    cBackground: Palette["primary"];
  }
  interface PaletteOptions {
    cBackground: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary,
    secondary,
    custom,
    cBackground,
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },

  components: {},
});

export default theme;
