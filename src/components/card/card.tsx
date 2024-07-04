import style from "./card.module.css";

interface CardProps {
  img?: string;
  title?: string;
  onClick?: () => void;
}

export const Card = ({ img, title, onClick }: CardProps) => {
  return (
    <div className={style.main} onClick={onClick}>
      <img src={img} alt="subject" />
      <p>{title}</p>
    </div>
  );
};
