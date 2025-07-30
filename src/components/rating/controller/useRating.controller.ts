import { useState } from 'react';
import type { UseRatingProps } from './interface/useRating.interface';
import { calculateStarValue } from '../../../utils/calculateStarValue';

export function useRating(initialValue: number = 0): UseRatingProps {
  const [rating, setRating] = useState<number>(initialValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClickEvent = (
    event: React.MouseEvent<HTMLElement>,
    starIndex: number,
  ) => {
    const newValue = calculateStarValue(event, starIndex);
    setRating(newValue);
  };

  const handleHoverEvent = (
    event: React.MouseEvent<HTMLElement>,
    starIndex: number,
  ) => {
    const newValue = calculateStarValue(event, starIndex);
    setHoverValue(newValue);
  };

  const handleMouseLeave = () => setHoverValue(null);

  return {
    rating,
    hoverValue,
    handleClickEvent,
    handleHoverEvent,
    handleMouseLeave,
  };
}
