import clsx from "clsx";
import "./button.css";
import { useContext } from "react";
import { CounterContext, OrderContext } from "../../contexts/counterContext";

export default function Button({ type, title, disable, id = null }) {
  const styles = clsx({
    add: type === "add",
    remove: type === "remove",
    checkout: type === "checkout",
    btn: true,
  });

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useContext(CounterContext);
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useContext(OrderContext);

  function handleClick(id) {
    if (type === "add") {
      setData((prevData) => {
        const updated = prevData.map((item) => {
          return item.id === id ? { ...item, amount: item.amount + 1 } : item;
        });
        return updated;
      });

      setOrder((prevOrder = []) => {
        if (prevOrder.length === 0) {
          const newItem = data.find((item) => item.id === id);
          return [{ ...newItem, amount: 1 }];
        }
        const existingItem = prevOrder.find((item) => item.id === id);
        if (existingItem) {
          return prevOrder.map((item) =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
          );
        }
        return [
          ...prevOrder,
          { ...data.find((item) => item.id === id), amount: 1 },
        ];
      });
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

      setOrder((prev = []) => {
        const itemIndex = prev.findIndex((x) => x.id === id);
        if (itemIndex === -1) return prev;

        return prev[itemIndex].amount <= 1
          ? prev.filter((x) => x.id !== id)
          : prev.map((x) => (x.id === id ? { ...x, amount: x.amount - 1 } : x));
      });
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
