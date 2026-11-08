import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("movies", "routes/movies.tsx"),
  route("movie/:movieId", "routes/movie-details.tsx"),
] satisfies RouteConfig;
