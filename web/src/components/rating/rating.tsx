import style from "./rating.module.css";

interface RatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

export const Rating = ({ rating, setRating }: RatingProps) => {
  return (
    <div className={style.star_rating}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? style.filled_star : style.empty_star}
          onClick={() => setRating(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};
