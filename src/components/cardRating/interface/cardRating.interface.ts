import type { Movie } from '../../../data/movies/interface/movie.interface';
import type { MouseEvent } from 'react';

export interface CardProps {
  movie: Movie;
  rating: number;
  hoverRating: number | null;
  onClick: (event: MouseEvent<HTMLElement>, starIndex: number) => void;
  onHover: (event: MouseEvent<HTMLElement>, starIndex: number) => void;
  onMouseLeave: () => void;
}
