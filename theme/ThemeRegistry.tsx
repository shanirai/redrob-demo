"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
// import { Poppins } from "next/font/google";
import { Jost } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const roboto = Jost({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: 56,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
      fontFamily: roboto.style.fontFamily,
    },
    h2: {
      fontSize: 28,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
      fontFamily: roboto.style.fontFamily,
    },
    h3: {
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
      fontFamily: roboto.style.fontFamily,
    },
    h4: {
      fontSize: 20,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: 1.5,
    },
    button: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 1.5,
      textTransform: "none",
    },
    caption: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
      lineHeight: 1.5,
    },
  },
  palette: {
    background: {
      // pink
      default: "#fff",
    },
    primary: {
      main: "#1967d2",
      light: "#3498db",
    },
    secondary: {
      main: "#c6dbf3",
      light: "#e3edf9",
    },
    text: {
      primary: "#121212",
      secondary: "#eff4fc",
    },
    error: {
      main: "#FF0000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: "600",
          fontSize: 16,
          lineHeight: 1.5,
          paddingLeft: 36,
          paddingRight: 36,
          paddingTop: 12,
          paddingBottom: 12,
        },
        sizeSmall: {
          height: 30,
        },
        sizeMedium: {
          height: 44,
        },
        sizeLarge: {
          height: 48,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
