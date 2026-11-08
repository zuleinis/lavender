import React from "react";

interface PosterWithDetailsProps {
  posterUrl: string;
  title: string;
  releaseDate?: Date;
}

export const PosterWithDetails = ({
  posterUrl,
  title,
  releaseDate,
}: PosterWithDetailsProps) => {
  return (
    <div>
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
    </div>
  );
};
