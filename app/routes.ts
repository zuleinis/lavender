import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("movies", "routes/movies.tsx"),
  route("movie/:movieId", "routes/movie-details.tsx"),
  route("profile", "routes/profile.tsx"),
  route("tv-shows", "routes/tv-shows.tsx"),
  route("all", "routes/all.tsx"),
] satisfies RouteConfig;
