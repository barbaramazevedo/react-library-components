import { useState } from "react";
import { movies } from "../../../data/movies/movies";

export function usePageCardRating() {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [hoverRatings, setHoverRatings] = useState<Record<number, number | null>>({});

  const handleClick = (movieId: number, value: number) => {
    setRatings((prev) => ({ ...prev, [movieId]: value }));
  };

  const handleHover = (movieId: number, value: number) => {
    setHoverRatings((prev) => ({ ...prev, [movieId]: value }));
  };

  const handleMouseLeave = (movieId: number) => {
    setHoverRatings((prev) => ({ ...prev, [movieId]: null }));
  };

  return {
    movies,
    ratings,
    hoverRatings,
    handleClick,
    handleHover,
    handleMouseLeave,
  };
}