import type { MouseEvent } from 'react';

export interface RatingProps {
  ratingValue: number;
  hoverValue?: number | null;
  onClick?: (event: MouseEvent<HTMLElement>, starIndex: number) => void;
  onHover?: (event: MouseEvent<HTMLElement>, starIndex: number) => void;
  onMouseLeave?: () => void;
}
