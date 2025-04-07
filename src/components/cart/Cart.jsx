import { useContext } from "react";
import { CounterContext } from "../../contexts/counterContext";
import "./cart.css";

function Cart() {
  const [data] = useContext(CounterContext);
  const totalAmount = data.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  return <div className="total-counter">${totalAmount.toFixed(2)}</div>;
}

export default Cart;
