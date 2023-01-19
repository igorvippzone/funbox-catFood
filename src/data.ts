export interface ICatFood {
  id: number;
  title: string;
  description: string;
  advantages: IAdvantage[];
  amount: IAdvantage;
  detailedDescription: string;
  quantity: number;
}
interface IAdvantage {
  value?: number | string;
  label: string;
}

export const catFood = [
  {
    id: 1,
    title: "Нямушка",
    description: "с фуа-гра",
    advantages: [{ value: 10, label: "порций" }, { label: "мышь в подарок" }],
    amount: { value: "0,5", label: "кг" },
    detailedDescription: "Печень утки разварная с артишоками.",
    quantity: 4,
  },
  {
    id: 2,
    title: "Нямушка",
    description: "с рыбой",
    advantages: [
      { value: 40, label: "порций" },
      { value: 2, label: "мышы в подарок" },
    ],
    amount: { value: "2", label: "кг" },
    detailedDescription: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    quantity: 4,
  },
  {
    id: 3,
    title: "Нямушка",
    description: "с курой",
    advantages: [
      { value: 100, label: "порций" },
      { value: 5, label: "мышей в подарок" },
      { label: "заказчик доволен" },
    ],
    amount: { value: "5", label: "кг" },
    detailedDescription: "Филе из цыплят с трюфелями в бульоне.",
    quantity: 0,
  },
];
