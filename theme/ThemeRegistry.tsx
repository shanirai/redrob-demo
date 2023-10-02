"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
// import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { SnackbarProvider, useSnackbar } from "notistack";

const roboto = Montserrat({
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
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 600,
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
      // default: "#f9fafb",
      // default: "#f0f5f9",
      // default: "#d6e0f3",
      default: "#eff3fc",
    },
    primary: {
      // main: "#815df2",
      // light: "#815df233",
      // main: "#4caae4",
      // main: "#0284c7",
      // light: "#815df233",
      // light: "#38bdf81a",
      // main: "#3c65f5",
      // light: "#bbcfeb",
      // below code from nv
      // main: "#324b71",
      // light: "#bbcfeb",
      main: "#69A3CC",
      light: "#69A3CC29",
    },
    secondary: {
      // main: "#c6dbf3",
      // light: "#7555dc",
      // below code from nv
      // main: "#d9d9d9",
      // main: "#05264e",
      // light: "#e0e6f7",
      main: "#EB896A",
      light: "#6BBE7929",
    },
    text: {
      primary: "#05264e",
      secondary: "#74788d",
    },
    error: {
      main: "#E75252",
    },
    grey: {
      100: "#FFFFFF",
      200: "#F0F0F0",
      300: "#DDDDDD",
      400: "#B5B5B5",
      500: "#575757",
      600: "#141414",
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
          color: "#fff",
        },
        sizeSmall: {
          height: 40,
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
    MuiChip: {
      styleOverrides: {
        root: {
          // backgroundColor: "#FBE0CD",
          backgroundColor: "#e0e6f7",
          fontSize: 12,
          lineHeight: 1.5,
          fontWeight: 600,
        },
        label: {
          fontSize: 12,
          lineHeight: 1.5,
          fontWeight: 600,
          // color: "#EC6607",
          color: "#121212",
          "&:hover": {
            color: "#fff",
          },
        },
        sizeSmall: {
          height: 26,
          borderRadius: 50,
        },
        sizeMedium: {
          height: 32,
          borderRadius: 18,
        },
        deleteIcon: {
          color: "inherit",
          marginRight: 8,
        },
        icon: {
          marginRight: "-10px",
          marginTop: "4px",
        },
        labelSmall: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        labelMedium: {
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
      defaultProps: {},
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
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          autoHideDuration={2000}
        >
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
