import React from "react";
import logo from "../assets/img/nav-logo.svg";

export const Preloader = () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div
      id="preloader"
      className=" w-full min-h-screen bg-[#00141b] flex justify-center items-center "
    >
      <div>
        <img className=" animate-pulse" src={logo} alt="img" />
      </div>
    </div>
  );
};
