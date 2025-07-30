import { CardRating } from '../../components/cardRating/view/CardRating';
import { useCardRating } from './controller/useCardRating.controller';
import './pageCardRating.css';

export const PageCardRating = () => {
  const {
    movies,
    ratings,
    hoverRatings,
    handleClick,
    handleHover,
    handleMouseLeave,
  } = useCardRating();

  return (
    <div className="page-wrapper">
      <div className="box">
        <div className="grid">
          {movies.map((movie) => (
            <CardRating
              key={movie.id}
              movie={movie}
              rating={ratings.hasOwnProperty(movie.id) ? ratings[movie.id] : 0}
              hoverRating={hoverRatings[movie.id]}
              onClick={(event, index) => handleClick(movie.id, event, index)}
              onHover={(event, index) => handleHover(movie.id, event, index)}
              onMouseLeave={() => handleMouseLeave(movie.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
