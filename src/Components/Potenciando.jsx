import React from "react";
import jackpot from "../assets/img/jackpot.png";
import { Ticks } from "./Mysvg";
import soloone from "../assets/img/soloone.png";
import Juegosone from "../assets/img/Juegosone.png";
import Juegostwo from "../assets/img/Juegostwo.png";
import Juegosthree from "../assets/img/Juegosthree.png";
// import solothree from "../assets/img/solothree.png";
import btnline from "../assets/img/btn-white.svg";

export const Potenciando = () => {
  return (
    <div
      id="elegirnos"
      className=" lg:pt-[90px] pt-[45px] bg_Potenciando lg:pb-[100px] pb-[50px] relative z-[10]  "
    >
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute top-[-20%] left-[-10%] z-[-5] hidden sm:block "></div>
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute bottom-[0] right-[-10%] z-[-5] "></div>
      <div className=" container mx-auto max-w-[1164px] px-3 relative ">
        <div className=" flex flex-wrap justify-center  lg:justify-between items-center">
          <div className=" lg:w-[47%] sm:w-[75%]  w-full" data-aos="fade-right">
            <img className=" rounded-[16px] w-full  " src={jackpot} alt="img" />
          </div>
          <div className=" mt-8 lg:mt-0 lg:w-[49%] w-full" data-aos="fade-left">
            <h2 className=" lg:text-[48px] text-[40px] font-normal text-white ff_Anton leading-[120%] ">
              Potenciando sus elecciones
            </h2>
            <p className=" text-[#cdd0d1] text-[16px] font-medium ff_inter  mt-[16px] leading-[160%]">
              Con Exclusive Game lo mejor está de tu lado.
            </p>
            <div className=" flex items-center gap-[8px] mt-[24px]">
              <Ticks />
              <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                Tecnología HTML5
              </p>
            </div>
            <div className=" flex items-center gap-[8px] mt-[12px]">
              <Ticks />
              <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                Versión PC y móvil
              </p>
            </div>
            <div className=" flex items-center gap-[8px] mt-[12px]">
              <Ticks />
              <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                Control de RTP (controlás qué porcentaje pagar)
              </p>
            </div>
            <div className=" flex  gap-[8px] mt-[12px]">
              <Ticks />
              <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                Bonos editables, happy hours, Jackpots, códigos{" "}
                <span className=" block"> promocionales.</span>
              </p>
            </div>
            <div className=" flex items-center gap-[8px] mt-[11px]">
              <Ticks />
              <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                Aplicación para android y windows de regalo.
              </p>
            </div>
            <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%] mt-[24px]">
              Te reintegramos todo lo invertido en fichas en la moneda que
              elijas.
            </p>
          </div>
        </div>
        <div
          className=" lg:px-[50px] lg:mt-[150px] mt-[70px]   border-[0.5px] rounded-[16px] border-[#fff]"
          data-aos="fade-down"
        >
          <div>
            <img
              className=" absolute top-0 left-[0] mix-blend-screen hidden lg:block"
              src={soloone}
              alt="img"
            />
            {/* <img
              className=" absolute bottom-0 right-[0] mix-blend-screen  "
              src={solothree}
              alt="img"
            /> */}
          </div>
          <p className=" lg:text-[48px] text-[29px] font-normal ff_Anton text-white leading-[120%] xl:py-[96px]  py-4 px-4 xl:px-[262px]  lg:py-12 text-center ">
            lanza tu propia plataforma{" "}
            <span className=" block">en sólo 2 semanas</span>
          </p>
        </div>
        <div>
          <h3
            className=" lg:text-[48px] text-[40px] font-normal ff_Anton text-white text-center mt-[70px] lg:mt-[150px]"
            data-aos="fade-down"
          >
            Juegos en vivo
          </h3>
          <div className=" flex flex-wrap  lg:justify-between justify-center mt-[24px] lg:mt-[60px]">
            <div
              className=" relative Juegos-card md:w-[33.3%]  sm:w-[50%] sm:px-[12px]  "
              data-aos="fade-right"
            >
              <div className=" relative">
                <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                    <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                      Reproducir ahora
                    </button>
                    <img
                      className=" absolute  bottom-[-8%] left-[-3%]"
                      src={btnline}
                      alt="img"
                    />
                  </div>
                </div>
                <img
                  className=" rounded-[8px] w-full "
                  src={Juegosone}
                  alt="img"
                />
              </div>
            </div>
            <div
              className=" relative Juegos-card md:w-[33.3%]  sm:w-[50%] sm:px-[12px] mt-6 sm:mt-0 "
              data-aos="fade-down"
            >
              <div className=" relative">
                <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px]  absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                    <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                      Reproducir ahora
                    </button>
                    <img
                      className=" absolute  bottom-[-8%] left-[-3%]"
                      src={btnline}
                      alt="img"
                    />
                  </div>
                </div>
                <img
                  className=" rounded-[8px] w-full "
                  src={Juegostwo}
                  alt="img"
                />
              </div>
            </div>
            <div
              className="  Juegos-card md:w-[33.3%]  sm:w-[50%]  sm:px-[12px] mt-6 md:mt-0 "
              data-aos="fade-left"
            >
              <div className=" relative">
                <div className="Juegos_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px]  absolute top-0 left-0 duration-500  ">
                  <div className=" relative">
                    <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                      Reproducir ahora
                    </button>
                    <img
                      className=" absolute  bottom-[-8%] left-[-3%]"
                      src={btnline}
                      alt="img"
                    />
                  </div>
                </div>
                <img
                  className=" rounded-[8px] w-full "
                  src={Juegosthree}
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
