import React from "react";
import { Link } from "react-router";

interface PosterWithDetailsProps {
  movieId: number;
  posterUrl: string;
  title: string;
  releaseDate?: Date;
}

export const PosterWithDetails = ({
  movieId,
  posterUrl,
  title,
  releaseDate,
}: PosterWithDetailsProps) => {
  return (
    <Link to={`/movie/${movieId}`}>
      {/* Rubric Item: Image with alt text (multiple*/}
      <img
        className="movie-list-poster"
        src={posterUrl}
        alt={`Poster for ${title}`}
        loading="lazy"
      />
      <strong>{title}</strong>
      {/* Rubric Item: Paragraph Formatting (break)*/}
      <br />
      <small>
        {" "}
        {releaseDate?.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </small>
    </Link>
  );
};
