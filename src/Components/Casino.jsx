import React from "react";
import casinos from "../assets/img/casino.png";
import btnunder from "../assets/img/btn-under.svg";

export const Casino = () => {
  return (
    <div
      id="Ofertas"
      className=" bg_casino lg:pt-[300px] lg:pb-[300px]  bg-white md:bg-[unset] pt-12  md:pt-[170px] md:pb-[190px]  pb-12 "
    >
      <div className=" container  mx-auto max-w-[1164px] px-3">
        <div className=" flex  flex-wrap lg:justify-between justify-center text-center lg:text-start items-center">
          <div className=" lg:w-[46%] w-full" data-aos="fade-right">
            <h2 className=" lg:text-[48px] text-[40px] font-normal ff_Anton text-black leading-[120%]">
              Por qué elegirnos
            </h2>
            <p className=" xl:text-[16px] text-[14px] font-medium ff_inter text-[#334349] mt-[16px] leading-[160%]">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              <span className=" lg:block">
                {" "}
                todo lo invertido en fichas en la moneda que elijas. En
                Exclusive
              </span>
              <span className=" lg:block">
                Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              </span>
              <span className=" lg:block">
                interactivos que más pide la gente. Con Exclusive Games empezás
                a
              </span>
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            <div className=" flex justify-center lg:justify-start z-[10]">
              <div className=" relative">
                <button className=" font-bold text-[16px] text-black ff_inter comn_btn py-[13px] px-[46px] mt-[40px]">
                  Aprende más
                </button>
                <img
                  className=" absolute  bottom-[-4px] left-[-4px] z-[-2]"
                  src={btnunder}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div
            className=" lg:w-[49%] md:w-[70%] sm:w-[70%] w-full mt-10 lg:mt-0"
            data-aos="fade-left"
          >
            <div>
              <img className=" w-full rounded-[16px]" src={casinos} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
