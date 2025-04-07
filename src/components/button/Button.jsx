import clsx from "clsx";
import "./button.css";
import { useContext } from "react";
import { CounterContext } from "../../contexts/counterContext";

export default function Button({ type, title, disable, id = null }) {
  const styles = clsx({
    add: type === "add",
    remove: type === "remove",
    checkout: type === "checkout",
    btn: true,
  });

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useContext(CounterContext);

  function handleClick(id) {
    if (type === "add") {
      setData((prevData) =>
        prevData.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        })
      );
    } else if (type === "remove") {
      setData((prevData) =>
        prevData.map((item) => {
          if (item.id === id && item.amount > 0) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  return (
    <button
      onClick={() => handleClick(id)}
      disabled={disable}
      className={styles}
    >
      {title}
    </button>
  );
}
