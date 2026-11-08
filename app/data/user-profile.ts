import {
  MovieCategory,
  MovieGenre,
  movies,
  type Movie,
} from "./movies";

export type UserProfile = {
  username: string;
  displayName: string;
  profilePictureUrl: string;
  watchlist: Movie[];
  preferences: {
    genres: MovieGenre[];
    queerCategories: MovieCategory[];
  };
};

const watchlistMovieIds = new Set<number>([2, 4, 11, 13, 26, 29]);

export const mockUserProfile: UserProfile = {
  username: "filmfriend",
  displayName: "Alex Morgan",
  profilePictureUrl:
    "https://placehold.co/400x400/d1d1ff/090934.png?text=AM",
  watchlist: movies.filter((movie) => watchlistMovieIds.has(movie.id)),
  preferences: {
    genres: [MovieGenre.Drama, MovieGenre.Romance, MovieGenre.Documentary],
    queerCategories: [
      MovieCategory.Lesbian,
      MovieCategory.Gay,
      MovieCategory.Trans,
      MovieCategory.Queer,
    ],
  },
};
