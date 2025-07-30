import { Rating } from '../../rating/view/Rating';
import { Title } from '../../title/view';
import type { CardProps } from '../interface/cardRating.interface';
import './cardRating.css';

export function CardRating({
  movie,
  rating,
  hoverRating,
  onClick,
  onHover,
  onMouseLeave,
}: CardProps) {
  return (
    <div className="movieCard">
      <img src={movie.image} alt={movie.title} className="image" />
      <Title elementType="h4" text={movie.title} id="h4" />
      <Rating
        ratingValue={rating}
        hoverValue={hoverRating}
        onClick={onClick}
        onHover={onHover}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
}
