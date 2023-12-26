import React from "react";
import ellosone from "../assets/img/ellosone.png";
import ellostwo from "../assets/img/ellostwo.png";
import ellosthree from "../assets/img/ellosthree.png";
import btnline from "../assets/img/btn-white.svg";

export const EllosEligieron = () => {
  return (
    <div className=" pt-[65px] lg:pt-[150px] lg:pb-[85px] pb-[42px] ">
      <div className=" container mx-auto max-w-[1164px] px-3">
        <div className=" text-center" data-aos="fade-down">
          <h2 className=" font-normal lg:text-[48px] text-[36px] ff_Anton text-white leading-[120%]">
            Ellos eligieron apostar con nosotros
          </h2>
        </div>
        <div className=" flex flex-wrap justify-center  lg:justify-between lg:mt-[60px] mt-[30px]">
          <div
            className="  Juegos-card md:w-[33.3%]  sm:w-[50%] px-[12px] "
            data-aos="fade-right"
          >
            <div className=" relative">
              <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Rcasinovip
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnline}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={ellosone}
                alt="img"
              />
            </div>
          </div>
          <div
            className="  Juegos-card md:w-[33.3%] sm:w-[50%] px-[12px] mt-6 sm:mt-0 "
            data-aos="fade-down"
          >
            <div className=" relative">
              <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px]  absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Rcasinovip
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnline}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px]  w-full h-full"
                src={ellostwo}
                alt="img"
              />
            </div>
          </div>
          <div
            className=" Juegos-card md:w-[33.3%] sm:w-[50%] px-[12px] mt-6 md:mt-0   "
            data-aos="fade-left"
          >
            <div className="relative ">
              <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px]  absolute top-0 left-0 duration-500  ">
                <div className=" relative">
                  <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                    Rcasinovip
                  </button>
                  <img
                    className=" absolute  bottom-[-8%] left-[-3%]"
                    src={btnline}
                    alt="img"
                  />
                </div>
              </div>
              <img
                className=" rounded-[8px] w-full h-full "
                src={ellosthree}
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className=" text-center " data-aos="fade-up">
          <p className=" text-[16px] font-semibold ff_inter  text-white mt-[38px]">
            Clientes satisfechos que confiaron en Exclusive Games y han
            disfrutado de emocionantes experiencias de juego.{" "}
            <span className=" lg:block">
              Ahora, la próxima apuesta está en tus manos.
            </span>{" "}
            Elige ganar. Elige exclusive game.
          </p>
        </div>
      </div>
    </div>
  );
};
