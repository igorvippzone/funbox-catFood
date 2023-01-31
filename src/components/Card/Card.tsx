import { FC, useState } from "react";

import { ICatFood } from "../../data";

import s from "./Card.module.scss";

interface IProps {
  selected: boolean;
  item: ICatFood;
  onAddCart: (id: number) => void;
  topText: { text: string; textHover: string };
}

const Card: FC<IProps> = ({ onAddCart, item, selected, topText }) => {
  const {
    title,
    description,
    advantages,
    amount,
    quantity,
    detailedDescription,
  } = item;

  const [isFirstSelectHover, setIsFirstSelectHover] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const selectedHandler = () => {
    onAddCart(item.id);
    setIsFirstSelectHover(false);
    setIsHover(false);
  };

  const selectedButtonHandler = () => {
    onAddCart(item.id);
    setIsFirstSelectHover(true);
  };

  const firstSelectHandler = () => {
    setIsHover(false);
    if (quantity === 0) return;

    if (selected) {
      setIsFirstSelectHover(true);
      return;
    }
    setIsFirstSelectHover(false);
  };

  const hoverCardHandler = () => {
    if (isFirstSelectHover) {
      setIsHover(true);
    }
  };

  const stylesCard = `${selected && quantity > 0 ? s.select : ""} 
  ${quantity === 0 ? s.disabled : s.active}
  ${isFirstSelectHover ? s.selectHover : ""}
  `;

  const footerContent = () => {
    if (quantity === 0) {
      return (
        <p className={`${s.footerText} ${s.yellow}`}>
          Печалька, {description} закончился.
        </p>
      );
    }
    if (selected) {
      return <p className={s.footerText}>{detailedDescription}</p>;
    }

    return (
      <p className={s.footerText}>
        Чего сидишь? Порадуй котэ,
        <button className={s.button} onClick={selectedButtonHandler}>
          <span>купи</span>.
        </button>
      </p>
    );
  };

  return (
    <li className={s.cardWrapper}>
      <div
        className={`${s.border} ${stylesCard}`}
        onClick={selectedHandler}
        onMouseEnter={hoverCardHandler}
        onMouseLeave={firstSelectHandler}
      >
        <div className={s.card}>
          {isHover ? (
            <p className={s.topName} style={{ color: "#E62E7A" }}>
              {topText.textHover}
            </p>
          ) : (
            <p className={s.topName}>{topText.text}</p>
          )}

          <h2 className={s.title}>{title}</h2>
          <h3 className={s.description}>{description}</h3>
          {advantages.map((advantage, index) => (
            <p className={s.advantages} key={index}>
              {advantage?.value && <span>{advantage?.value} </span>}
              {advantage.label}
            </p>
          ))}
        </div>
        <div className={s.amount}>
          <span className={s.number}>{amount.value}</span>
          {amount.label}
        </div>
      </div>

      {footerContent()}
    </li>
  );
};

export default Card;
