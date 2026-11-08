import React from "react";
import type { Route } from "./+types/home";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import muiTheme from "../../MuiTheme.json";
import { NavBar } from "~/components/nav";
import { TrendingNow } from "~/components/TrendingNow/TrendingNow";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Lavender Frame" },
    { name: "description", content: "A curated collection of queer cinema." },
  ];
}

const colors = muiTheme.schemes.dark;

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.primary, contrastText: colors.onPrimary },
    secondary: {
      main: "#6559FB",
      contrastText: "#d1d1ff",
    },
    background: { default: colors.background, paper: colors.surface },
    text: { primary: colors.onSurface, secondary: colors.onSurfaceVariant },
    error: { main: colors.error },
    divider: colors.outlineVariant,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <NavBar />
        <TrendingNow />
      </main>
    </ThemeProvider>
  );
}
