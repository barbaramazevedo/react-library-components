import type { MouseEvent } from 'react';

export interface UseRatingProps {
  rating: number;
  hoverValue: number | null;
  handleClickEvent: (event: MouseEvent<HTMLElement>, starIndex: number) => void;
  handleHoverEvent: (event: MouseEvent<HTMLElement>, starIndex: number) => void;
  handleMouseLeave: () => void;
}
