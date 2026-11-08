import React from "react";
import type { Route } from "./+types/home";
import { TrendingNow } from "~/components/TrendingNow/TrendingNow";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Lavender Frame" },
    { name: "description", content: "A curated collection of queer cinema." },
  ];
}

export default function Home() {
  return (
    <main>
      <TrendingNow />
    </main>
  );
}
