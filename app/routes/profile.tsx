import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { mockUserProfile } from "~/data/user-profile";
import { formatRuntime } from "~/utils";

export default function Profile() {
  return (
    <main>
      <div className="page-container profile-page">
        <h1>{mockUserProfile.displayName}</h1>
        <small>@{mockUserProfile.username}</small>
        <section>
          <h2>Watchlist</h2>
          <hr />
          <br />
          {mockUserProfile.watchlist?.length ? (
            <ul>
              {mockUserProfile.watchlist.map((movie, index) => (
                <Link className="watchlist-item-link" to={`/movie/${movie.id}`}>
                  <li key={index} className="watchlist-item">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="watchlist-item-poster"
                    />
                    <div>
                      <h3>
                        {movie.title}{" "}
                        <small>{movie.release_date.getFullYear()}</small>
                      </h3>
                      <Typography variant="caption" color="textSecondary">
                        {movie.rating}
                        {movie.release_date &&
                          ` | ${movie.release_date.toLocaleDateString()}`}
                        {movie.runtimeMinutes &&
                          ` | ${formatRuntime(movie.runtimeMinutes)}`}
                      </Typography>
                      <p>{movie.overview}</p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p>No movies in your watchlist.</p>
          )}
        </section>
      </div>
    </main>
  );
}
