import { FC } from "react";

import FoodList from "./components/FoodList/FoodList";

const App: FC = () => (
  <div className="App">
    <h1>Ты сегодня покормил кота?</h1>

    <FoodList />
  </div>
);

export default App;
