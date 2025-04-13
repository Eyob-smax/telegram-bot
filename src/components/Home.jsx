// import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="home-page">
        <div className="btn-container">
          <Link className="text-[white] no-underline" to="/register">
            <button className="bg-[gold]">SIGNUP</button>
          </Link>

          <Link className="text-[white] no-underline" to="/login">
            <button className="bg-[black]">LOGIN</button>
          </Link>
        </div>
      </div>
    </>
  );
}
