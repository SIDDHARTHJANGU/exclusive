import React, { useState, useEffect } from "react";
import logo from "../assets/img/nav-logo.svg";
import btnline from "../assets/img/btn-white.svg";
import btnunder from "../assets/img/btn-under.svg";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Myheader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className=" lg:min-h-[810px] min-h-[550px] flex flex-col bg_hero ">
      <nav className=" nav_bg py-[19px] relative z-30">
        <div className=" container  mx-auto max-w-[1164px] px-3">
          <div className=" flex items-center justify-between ">
            <div className=" flex  xl:gap-[101px] gap-[60px]">
              <div>
                <img src={logo} alt="img" />
              </div>
              <ul
                className={`${
                  show ? "left-0" : "left-[-100%]"
                } flex  gap-[28px]  z-30 min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#000] lg:bg-[unset]  max-lg:w-[100%] max-lg:flex-col flex-row max-lg:min-h-screen  right-0 ps-0 duration-[350ms] transition-all ease-linear`}
              >
                <li>
                  <a
                    onClick={Movement}
                    href="#Hogar"
                    className=" font-medium text-[16px] ff_inter text-[#d2d8da] hover:text-white duration-300  relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Hogar
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#Misión"
                    className=" font-medium text-[16px] ff_inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Misión
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#Tragamonedas"
                    className=" font-medium text-[16px] ff_inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Tragamonedas
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#elegirnos"
                    className=" font-medium text-[16px] ff_inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Por qué elegirnos
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#Ofertas"
                    className=" font-medium text-[16px] ff_inter text-[#d2d8da] hover:text-white duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[2px] after:bottom-[-5px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%]"
                  >
                    Ofertas
                  </a>
                </li>
                <div className=" relative lg:hidden z-[10]">
                  <button className=" border border-[#fff] px-[46px] py-[13px] text-white text-[16px] font-bold ff_inter rounded-[41px] ">
                    Acceso
                  </button>
                  <img
                    className=" absolute  bottom-[-4px] left-[-4px]  "
                    src={btnline}
                    alt="img"
                  />
                </div>
              </ul>
            </div>
            <div className=" relative hidden lg:block z-[10]">
              <button className=" border border-[#fff] px-[46px] py-[13px] text-white text-[16px] font-bold ff_inter rounded-[41px] white_shadow ">
                Acceso
              </button>
              <img
                className=" absolute  bottom-[-7%] left-[-3%] z-[-3] "
                src={btnline}
                alt="img"
              />
            </div>
            <div
              className=" position-relative  z-30  lg:hidden  "
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? <img src={close} alt="#" /> : <img src={menu} alt="#" />}
            </div>
          </div>
        </div>
      </nav>
      <div id="Hogar" className=" flex-grow flex">
        <div className=" container  mx-auto max-w-[1164px] px-3 flex items-center justify-center">
          <div className="  text-center " data-aos="fade-down">
            <h1 className=" font-normal lg:text-[72px]  text-[48px] text-white ff_Anton leading-[120%] uppercase">
              Exclusive Games. <span className=" block"> Pasión por ganar</span>
            </h1>
            <p className=" font-medium lg:text-[16px] text-[14px] ff_inter text-[#cccfd1] pt-[16px] leading-[160%]">
              En Exclusive Games somos un equipo apasionado de personas
              dedicados al desarrollo de{" "}
              <span className=" sm:block">
                multiplataformas para juegos de azar. A lo largo de nuestra vida
                consumimos todo tipo de
              </span>{" "}
              juegos hasta que un día decidimos crear los propios.
            </p>
            <div className=" flex justify-center z-[10]">
              <div className=" relative">
                <button className=" font-bold text-[16px] text-black ff_inter comn_btn py-[13px] px-[46px] mt-[40px] green_shadow  ">
                  Empezar
                </button>
                <img
                  className=" absolute  bottom-[-5px] left-[-4px] z-[-2] "
                  src={btnunder}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
