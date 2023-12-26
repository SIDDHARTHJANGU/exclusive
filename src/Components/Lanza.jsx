import React from "react";
import btnunder from "../assets/img/btn-under.svg";

export const Lanza = () => {
  return (
    <div className=" lg:pb-[150px] pb-[75px]">
      <div className=" container mx-auto max-w-[1164px] px-3">
        <div className=" lanza_bg rounded-[16px] border-[0.5px] border-[#828f91]">
          <div
            className=" text-center lg:py-[104px] py-[50px]"
            data-aos="fade-down"
          >
            <h2 className=" font-normal lg:text-[32px] text-[28px] ff_Anton text-white leading-[130%]">
              Lanza tu propia plataforma en sólo 2 semanas
            </h2>
            <div className=" flex justify-center">
              <div className=" relative z-[10]">
                <button className=" font-bold text-[16px] green_shadow text-black ff_inter comn_btn py-[13px] px-[46px] mt-[40px]">
                  Leer más
                </button>
                <img
                  className=" absolute  bottom-[-4px] left-[-4px] z-[-2]    "
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
