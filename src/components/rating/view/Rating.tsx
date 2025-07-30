import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import type { RatingProps } from '../interface/rating.interface';
import './rating.css';

export function Rating({
  ratingValue,
  onClick,
  onHover,
  onMouseLeave,
  hoverValue,
}: RatingProps) {
  const stars = [];
  const displayValue = hoverValue ?? ratingValue;

  for (let i = 1; i <= 5; i++) {
    const isFull = i <= displayValue;
    const isHalf = !isFull && i - 0.5 <= displayValue;

    stars.push(
      <span
        key={i}
        onClick={(event) => onClick?.(event, i)}
        onMouseMove={(event) => onHover?.(event, i)}
        onMouseLeave={onMouseLeave}
        className="star"
      >
        {isFull ? <FaStar /> : isHalf ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>,
    );
  }

  return <div className="rating">{stars}</div>;
}
