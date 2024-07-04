import React from "react";
import style from "./card.module.css";

interface CardProps {
  img: string;
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

export const Card: React.FC<CardProps> = ({
  img,
  title,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={`${style.main} ${isSelected ? style.selected : ""}`}
      onClick={onClick}
    >
      <img src={img} alt={title} className={style.card_img} />
      <h3>{title}</h3>
    </div>
  );
};
