import { createTheme } from "@mui/material";

// Global styling settings

export const theme = createTheme({
  palette: {
    primary: {
      main: "#050A30",
      textMainColor: "#FFFFFF",
    },

    secondary: {
      main: "#282d5d",
      textMainColor: "#42eaf3",
    },
  },

  globalFontFamily: {
    manrope: "'Manrope', sans-serif",
  },

  fontSizes: {
    h1: "2.8vw",
    h3: "2.2vw",
    p: "1.8vw",
  },

  sectionSpacing: "20px",
  sectionHeight: "100vh",

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
