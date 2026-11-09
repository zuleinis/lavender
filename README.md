# HCI 525 Project: The Lavender Frame

A mock queer-cinema discovery site built with HTML, CSS, React, React Router, and MUI.

To find items relevant to the project rubric, see table below or search for "Rubric Item" in a text editor such as Visual Studio Code.

The initial commit contains code from a [React Router starter](https://reactrouter.com/tutorials/quickstart). 

## Rubric Navigation

| Rubric area                                      | Relevant files                                                                                                                                                                                                                                     |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page routes and internal navigation              | [Route configuration](app/routes.ts), [navbar](app/components/nav.tsx)                                                                                                                                                                             |
| Home and trending movies                         | [Home route](app/routes/home.tsx), [Trending Now component](app/components/TrendingNow.tsx)                                                                                                                                                        |
| Movies catalog and poster links                  | [Movies route](app/routes/movies.tsx), [Poster component](app/components/PosterWithDetails.tsx)                                                                                                                                                    |
| Movie details, trailer, streaming links, reviews | [Movie details route](app/routes/movie-details.tsx), [movie data](app/data/movies.ts), [community comment data](app/data/community-comments.ts)                                                                                                    |
| Profile and watchlist                            | [Profile route](app/routes/profile.tsx), [mock profile data](app/data/user-profile.ts)                                                                                                                                                             |
| Additional pages                                 | [TV Shows](app/routes/tv-shows.tsx), [All](app/routes/all.tsx)                                                                                                                                                                                     |
| Advanced HTML examples and formatting            | [Navbar](app/components/nav.tsx) (`nav`), [Trending Now](app/components/TrendingNow.tsx) (`section`, `iframe`, `figure`, `figcaption`), [movie details](app/routes/movie-details.tsx) (`section`, `iframe`, `strong`, `em`, `small`, `span`, `hr`) |
| Images and alt text                              | [Poster component](app/components/PosterWithDetails.tsx), [display ads](app/data/display-ads.ts), [movies](app/data/movies.ts), [profile](app/routes/profile.tsx)                                                                                  |
| Image captions and source links                  | [Home ad figure](app/components/TrendingNow.tsx), [catalog ad figure](app/routes/movies.tsx), [details ad figure](app/routes/movie-details.tsx)                                                                                                    |
| External links                                   | [Streaming provider links](app/data/movies.ts), [movie details links](app/routes/movie-details.tsx), [image source links](app/components/TrendingNow.tsx)                                                                                          |
| Inline, head, and external CSS examples          | [Inline styles](app/components/TrendingNow.tsx), [head style](app/root.tsx), [external stylesheet](app/app.css)                                                                                                                                    |
| Theme colors                                     | [CSS variables and styles](app/app.css), [Material theme values](MuiTheme.json)                                                                                                                                                                    |
| Shared page shell and footer                     | [Root layout](app/root.tsx), [Footer component](app/components/footer.tsx)                                                                                                                                                                         |

## Pages

- `/` - Home and featured trending movie
- `/movies` - Movie catalog
- `/movie/:movieId` - Movie details
- `/profile` - Mock profile and watchlist
- `/tv-shows` - Coming soon
- `/all` - Coming soon

## Run Locally

```bash
npm install
npm run dev
```

Run the production checks with:

```bash
npm run typecheck
npm run build
```
