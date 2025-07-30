import { useState } from 'react';
import type { MouseEvent } from 'react';
import { movies } from '../../../data/movies/movies';
import { calculateStarValue } from '../../../utils/calculateStarValue';

export function useCardRating() {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [hoverRatings, setHoverRatings] = useState<
    Record<number, number | null>
  >({});

  const handleClick = (
    movieId: number,
    event: MouseEvent<HTMLElement>,
    starIndex: number,
  ) => {
    const value = calculateStarValue(event, starIndex);
    setRatings((prev) => ({ ...prev, [movieId]: value }));
  };

  const handleHover = (
    movieId: number,
    event: MouseEvent<HTMLElement>,
    starIndex: number,
  ) => {
    const value = calculateStarValue(event, starIndex);
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
