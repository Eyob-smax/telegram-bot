import getData from "../service/data";
import Card from "./card/Card";
import "./App.css";
import { CounterContext, OrderContext } from "../contexts/counterContext";
import { useState, useEffect } from "react";
import Button from "./button/Button";
import Cart from "./cart/Cart";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./login/Login";
import Home from "./Home";
import Register from "./login/Register";

export default function App() {
  const [data, setData] = useState(() => getData());
  const [order, setOrder] = useState([]);
  const isSomeCardSelected = data.some((item) => item.amount > 0);

  async function placeOrder() {
    console.log(order);
  }

  useEffect(() => {
    (async () => {
      await placeOrder();
    })();
  }, []);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (order.length > 0) {
  //     navigate("/main");
  //   }
  // }, [order]);

  return (
    <>
      <OrderContext value={[order, setOrder]}>
        <CounterContext value={[data, setData]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/main"
              element={
                <main>
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
                      onClick={placeOrder}
                      title={"Place order"}
                    />
                  </div>
                </main>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </CounterContext>
      </OrderContext>
    </>
  );
}
