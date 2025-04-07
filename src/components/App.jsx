import getData from "../service/data";
import Card from "./card/Card";
import "./App.css";
import { CounterContext } from "../contexts/counterContext";
import { useState } from "react";
import Button from "./button/Button";
import Cart from "./cart/Cart";

export default function App() {
  const [data, setData] = useState(() => getData());
  const isSomeCardSelected = data.some((item) => item.amount > 0);

  return (
    <>
      <CounterContext value={[data, setData]}>
        <h1 className="title">Order Food</h1>
        <Cart />
        <div className="card-container-main">
          {data.map((item, index) => (
            <Card
              key={item.id || index}
              menu={{
                img: item.img,
                title: item.title,
                price: item.price,
                id: item.id,
              }}
              type="add"
              amount={item.amount}
            />
          ))}
        </div>
        <div className="checkout-section">
          <Button
            type="checkout"
            disable={isSomeCardSelected ? false : true}
            title={"Checkout"}
          />
        </div>
      </CounterContext>
    </>
  );
}
