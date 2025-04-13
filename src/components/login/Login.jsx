import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    try {
      if (!window.Telegram || !window.Telegram.WebApp) {
        setError("Telegram WebApp is not available.");
        return;
      }
      const telegram = window.Telegram?.WebApp || null;
      console.log(telegram);
      const { id } = telegram.initDataUnsafe.user;
      const usernameData = username;
      const passwordData = password;
      const data = {
        telegramId: id,
        username: usernameData,
        password: passwordData,
      };

      const response = await fetch("http://localhost:6000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const { success, message } = await response.json();
      setError(
        "from server" + message ||
          "after sending data to server, no response from server"
      );
      if (success) {
        navigate("/main");
      } else {
        setError("unsuccessful ", message);
      }
    } catch (err) {
      console.log(err.message);
      setError("error inside try block, " + err.message);
    }
  }

  return (
    <div className="login-container bg-[white] h-[100vh] ">
      <h1 className="text-center p-[12px] absolute top-[50px] left-1/2 transform -translate-x-1/2 text-[33px] font-bold">
        Login
      </h1>
      <form onSubmit={handleLogin} className="relative mx-auto form-container">
        <div className="username-field-container">
          <label className="mb-[10px] pl-[5px]">Username</label>
          <input
            type="username"
            placeholder="Maya restaurant"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" p-[15px] rounded-[10px] border-gray-300"
          />
        </div>
        <div className="password-field-container flex-col">
          <label className="mb-[10px] pl-[5px]">Password</label>
          <input
            type="password"
            placeholder="myPassword@123"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-[15px] rounded-[10px] "
          />
        </div>
        <div className="forget-password-section flex justify-between items-end mb-[10px]">
          <a href="#" className=" text-[black] hover:underline">
            Forget Password?
          </a>
        </div>
        {error && (
          <div className="error-message text-red-500 mb-4">{error}</div>
        )}
        <div className="login-button-container">
          <button
            className="bg-[black] border-none py-[15px] rounded-[30px] w-[80%] mx-auto absolute text-[white] text-20px bottom-[15%] left-1/2 transform -translate-x-1/2"
            type="submit"
          >
            LOGIN
          </button>
          <Link to="/">
            <button className="bg-[white] border-[black] py-[15px] rounded-[30px] w-[80%] mx-auto absolute text-20px bottom-[5%] left-1/2 transform -translate-x-1/2 text-[30px">
              CANCEL
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
