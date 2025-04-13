import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Handle login logic here (e.g., API call)
    console.log("Logging in with:", { email, password });
    setError("");
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   if (!email || !password || password !== confirmPassword) {
  //     setError("Please check your inputs");
  //     return;
  //   }
  //   // Handle registration logic here (e.g., API call)
  //   console.log("Registering with:", { email, password });
  //   setError("");
  // };

  return (
    <div className="login-container bg-[white] h-[100vh] ">
      <h1 className="text-center p-[12px] absolute top-[50px] left-1/2 transform -translate-x-1/2 text-[33px] font-bold">
        Login
      </h1>
      <form
        action=""
        className="mx-auto form-container relative"
        onSubmit={handleLogin}
      >
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
        <div className="email-field-container">
          <label className="mb-[10px] pl-[5px]">email</label>
          <input
            type="email"
            placeholder="@Ihaveadream.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="password-confirm-field-container flex-col">
          <label className="mb-[10px] pl-[5px]">Confirm Password</label>
          <input
            type="confirm-password"
            placeholder="myPassword@123"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-[15px] rounded-[10px] "
          />
        </div>

        {error && (
          <div className="error-message text-red-500 mb-4">{error}</div>
        )}
        <div className="login-button-container">
          <button
            className="bg-[black] border-none py-[15px] rounded-[30px] w-[80%] mx-auto absolute text-[white] text-20px bottom-[5%] left-1/2 transform -translate-x-1/2"
            type="submit"
          >
            SIGNUP
          </button>
          <button className="bg-[white] border-[black] py-[15px] rounded-[30px] w-[80%] mx-auto absolute text-20px bottom-[-5%] left-1/2 transform -translate-x-1/2 text-[30px">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
