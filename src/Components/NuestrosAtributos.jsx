import React from "react";
import { Innova, Light, Proact } from "./Mysvg";
import lineone from "../assets/img/sec3line2.svg";
import linetwo from "../assets/img/sec3lineone.svg";
import slotone from "../assets/img/slotone.png";
import slottwo from "../assets/img/slottwo.png";
import slotthree from "../assets/img/slotthree.png";
import slotfour from "../assets/img/slotfour.png";
import slotfive from "../assets/img/slotfive.png";
import slotsix from "../assets/img/slotsix.png";
import btnline from "../assets/img/btn-white.svg";
import btnunder from "../assets/img/btn-under.svg";

export const NuestrosAtributos = () => {
  return (
    <div
      id="Tragamonedas"
      className=" bg_secthree  bg-white md:bg-[unset] lg:pt-[240px] pt-12  md:pt-[170px] md:pb-[165px]  pb-12  lg:pb-[240px]  "
    >
      <div className=" container mx-auto max-w-[1164px] px-3">
        <div data-aos="fade-down">
          <h2 className=" lg:text-[48px] text-[40px] font-normal text-black ff_Anton text-center leading-[120%]">
            Nuestros Atributos de Marca
          </h2>
        </div>
        <div className=" flex flex-wrap justify-center gap-10 md:gap-0  md:justify-between mt-[60px]">
          <div
            className="  text-center flex  items-center flex-col relative"
            data-aos="fade-right"
          >
            <div>
              <img
                className=" absolute top-[5%] left-[90%] hidden lg:block"
                src={lineone}
                alt="img"
              />
            </div>
            <Light />
            <p className=" text-[20px] font-normal ff_Anton text-black">
              Inteligencia
            </p>
            <p className=" text-[16px] font-medium  ff_inter text-[#334349]">
              Comprendemos a la perfección{" "}
              <span className=" block">los gustos de las personas y el</span>{" "}
              mundo del gaming.
            </p>
          </div>
          <div
            className="  text-center flex  items-center flex-col relative "
            data-aos="fade-down"
          >
            <div>
              <img
                className=" absolute top-[30%] left-[100%]  hidden lg:block"
                src={linetwo}
                alt="img"
              />
            </div>
            <Proact />
            <p className=" text-[20px] font-normal ff_Anton text-black">
              Proactividad
            </p>
            <p className=" text-[16px] font-medium  ff_inter text-[#334349]">
              Somos creadores de cambios{" "}
              <span className=" block"> que exploran nuevas formas</span> de
              entretenimiento.
            </p>
          </div>
          <div
            className="  text-center flex  items-center flex-col "
            data-aos="fade-left"
          >
            <Innova />
            <p className=" text-[20px] font-normal ff_Anton text-black">
              Innovación
            </p>
            <p className=" text-[16px] font-medium  ff_inter text-[#334349]">
              Pensamos fuera de la caja para{" "}
              <span className=" block">estar siempre un paso adelante.</span>
            </p>
          </div>
        </div>
        <div
          className=" text-center lg:pt-[150px] pt-[70px]"
          data-aos="fade-down"
        >
          <h3 className="lg:text-[48px] text-[40px]  font-normal text-black  ff_Anton leading-[120%] ">
            Slots{" "}
          </h3>
          <p className=" text-[#334349]  font-medium text-[16px] ff_inter leading-[160%] mt-[16px]">
            En Exclusive Games, ofrecemos una selección de más de 600 juegos de
            los principales desarrolladores, como{" "}
            <span className=" lg:block">
              {" "}
              Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom
              Horn. Nuestro equipo trabaja incansablemente para
            </span>{" "}
            <span className=" lg:block">
              {" "}
              innovar y ampliar nuestra oferta de experiencias, garantizando la
              máxima seguridad con operaciones protegidas por
            </span>{" "}
            cifrado SSL de 256 bits.
          </p>
        </div>
        <div className=" flex flex-wrap md:justify-between  justify-center    mt-[60px]   ">
          <div
            className=" relative slot-card  lg:w-[32%] md:w-[49%]  w-full "
            data-aos="fade-right"
          >
            <div className="slotcard_layer cursor-pointer w-[100%] h-[100%]  flex justify-center items-center opacity-0  absolute top-0 left-0 duration-500  ">
              <div className=" relative">
                <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                  Jugar
                </button>
                <img
                  className=" absolute bottom-[-8%] left-[-4%]   "
                  src={btnline}
                  alt="img"
                />
              </div>
            </div>
            <img className=" rounded-[8px] w-full" src={slotone} alt="img" />
          </div>
          <div
            className=" relative  slot-card  lg:w-[32%] md:w-[49%]  w-full mt-6 sm:mt-[17px]  md:mt-0  "
            data-aos="fade-down"
          >
            <div className="slotcard_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 rounded-[8px]  absolute top-0 left-0 duration-500  ">
              <div className=" relative">
                <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                  Jugar
                </button>
                <img
                  className=" absolute bottom-[-8%] left-[-4%]   "
                  src={btnline}
                  alt="img"
                />
              </div>
            </div>
            <img className=" rounded-[8px] w-full " src={slottwo} alt="img" />
          </div>
          <div
            className=" relative slot-card  lg:w-[32%] md:w-[49%]  w-full mt-6 sm:mt-[17px]  lg:mt-0 "
            data-aos="fade-left"
          >
            <div className="slotcard_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 rounded-[8px]  absolute top-0 left-0 duration-500  ">
              <div className=" relative">
                <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                  Jugar
                </button>
                <img
                  className=" absolute bottom-[-8%] left-[-4%]  "
                  src={btnline}
                  alt="img"
                />
              </div>
            </div>
            <img className=" rounded-[8px]  w-full" src={slotthree} alt="img" />
          </div>
          <div
            className=" relative slot-card  lg:w-[32%] md:w-[49%]  w-full mt-6 sm:mt-[17px] lg:mt-[22px] "
            data-aos="fade-right"
          >
            <div className="slotcard_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 hover:rounded-[8px] absolute top-0 left-0 duration-500  ">
              <div className=" relative">
                <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                  Jugar
                </button>
                <img
                  className=" absolute bottom-[-8%] left-[-4%]  "
                  src={btnline}
                  alt="img"
                />
              </div>
            </div>
            <img className=" rounded-[8px] w-full " src={slotfour} alt="img" />
          </div>
          <div
            className=" relative slot-card  lg:w-[32%] md:w-[49%]  w-full mt-6 sm:mt-[17px] lg:mt-[22px] "
            data-aos="fade-up"
          >
            <div className="slotcard_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 rounded-[8px]  absolute top-0 left-0 duration-500  ">
              <div className=" relative">
                <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                  Jugar
                </button>
                <img
                  className=" absolute bottom-[-8%] left-[-4%]  "
                  src={btnline}
                  alt="img"
                />
              </div>
            </div>
            <img className=" rounded-[8px] w-full " src={slotfive} alt="img" />
          </div>
          <div
            className=" relative slot-card  lg:w-[32%] md:w-[49%]  w-full mt-6 sm:mt-[17px] lg:mt-[22px] "
            data-aos="fade-left"
          >
            <div className="slotcard_layer cursor-pointer w-[100%] h-[100%] hover:opacity-[0.5] flex justify-center items-center opacity-0 rounded-[8px] absolute top-0 left-0 duration-500  ">
              <div className=" relative">
                <button className=" border-[1px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px] ">
                  Jugar
                </button>
                <img
                  className=" absolute bottom-[-8%] left-[-4%]  "
                  src={btnline}
                  alt="img"
                />
              </div>
            </div>
            <img className=" rounded-[8px] w-full " src={slotsix} alt="img" />
          </div>
        </div>
        <div className=" flex justify-center z-[10]" data-aos="fade-up">
          <div className="  relative">
            <img
              className=" absolute  bottom-[-4px] left-[-4px] z-[-2]"
              src={btnunder}
              alt="img"
            />
            <button className=" font-bold text-[16px] text-black ff_inter comn_btn py-[13px] px-[46px] mt-[40px] green_shadow">
              Mostrar más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
