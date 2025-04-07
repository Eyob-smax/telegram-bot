import "./card.css";
import Button from "../button/Button";
import clsx from "clsx";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Card({ menu, amount }) {
  const clasName = clsx("counter", {
    "counter-active": amount > 0,
    "counter-inactive": amount === 0,
  });

  return (
    <div className="card-container">
      <span className={clasName}>{amount}</span>
      <div className="img-container">
        <img className="menu-img" src={menu.img} alt={menu.title} />
      </div>
      <p>
        {menu.title}
        <span className="price-display">{intl.format(menu.price)}</span>
      </p>
      <div className="btnContainer">
        <Button type={"add"} disable={false} title={"+"} id={menu.id} />
        {amount > 0 && (
          <Button type={"remove"} disable={false} title={"-"} id={menu.id} />
        )}
      </div>
    </div>
  );
}
