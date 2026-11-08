import React from "react";
import type { Route } from "./+types/home";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import muiTheme from "../../MuiTheme.json";
import { NavBar } from "~/components/nav";

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
    secondary: { main: colors.secondary, contrastText: colors.onSecondary },
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
      </main>
    </ThemeProvider>
  );
}
