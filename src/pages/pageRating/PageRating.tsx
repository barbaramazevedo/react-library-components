import { useRating } from '../../components/rating/controller/useRating.controller';
import { Rating } from '../../components/rating/view/Rating';
import { Title } from '../../components/title/view';
import movie1 from '../../assets/images/movies/francesha.jpg';
import styles from './pageRating.module.css';

export const PageRating = () => {
  const {
    rating,
    hoverValue,
    handleClickEvent,
    handleHoverEvent,
    handleMouseLeave,
  } = useRating();

  return (
    <div className="page-wrapper">
      <div className="box">
        <div className={styles.previewBox}>
          <img src={movie1} alt="Exemplo de filme" className={styles.image} />
          <Title elementType="h5" text="Frances Ha" id="h5" />
          <Rating
            ratingValue={rating}
            hoverValue={hoverValue}
            onClick={handleClickEvent}
            onHover={handleHoverEvent}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};
