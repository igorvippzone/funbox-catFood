import { FC, useState } from "react";

import { catFood } from "../../data";
import Card from "../Card/Card";

import s from "./FoodList.module.scss";

const FoodList: FC = () => {
  const [cart, setCart] = useState<number[]>([]);

  const selectHandler = (id: number) => {
    if (cart.includes(id)) {
      setCart(cart.filter((item) => item !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <ul className={s.list}>
      {catFood.map((item) => {
        const selected = cart.includes(item.id);

        return (
          <Card
            selected={selected}
            item={item}
            key={item.id}
            onAddCart={selectHandler}
            topText={{
              text: "Сказочное заморское яство",
              textHover: "Котэ не одобряет?",
            }}
          />
        );
      })}
    </ul>
  );
};

export default FoodList;
