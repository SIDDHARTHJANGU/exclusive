import React from "react";
import pokers from "../assets/img/poker.png";
import avaitur from "../assets/img/aviator.png";

export const Poker = () => {
  return (
    <div
      id="Misión"
      className=" lg:pt-[74px] lg:pb-[100px] pt-9 pb-9 relative z-10"
    >
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute top-[125px] left-[-332px] "></div>
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute bottom-[-40%] right-[-332px] z-[15] hidden sm:block "></div>
      <div className=" container mx-auto  max-w-[1164px] px-3  ">
        <div className=" w-[100px] h-[100px] rounded-[100px] ellips2 absolute top-[45%] left-[50%] z-[-10]"></div>
        <div className=" flex flex-wrap md:justify-between justify-center z-[20] ">
          <div className="md:w-[47%]  w-full">
            <div data-aos="fade-right">
              <img
                className=" rounded-[16px] w-full z-[100]"
                src={pokers}
                alt="img"
              />
            </div>
            <div className=" pt-[30px] lg:pt-[60px]   " data-aos="fade-right">
              <h2 className=" font-normal lg:text-[48px] text-[40px] text-white ff_Anton leading-[120%] ">
                Nuestra Visión
              </h2>
              <p className=" font-medium text-[16px] ff_inter text-[#cccfd1] mt-[16px] leading-[160%]">
                Nuestra visión es ser líderes indiscutibles en la industria{" "}
                <span className=" lg:block">
                  de los juegos de azar y llevar nuestra pasión por el
                </span>{" "}
                <span className=" lg:block">
                  {" "}
                  entretenimiento más allá de las fronteras. Imagina un
                </span>{" "}
                <span className=" lg:block">
                  {" "}
                  mundo donde la emoción y la diversión no tengan límites,
                </span>{" "}
                y ese es el mundo que queremos crear contigo.
              </p>
              <button className="font-bold text-[16px] text-[#7af57a] ff_inter mt-[24px] ">
                Aprende más -->
              </button>
            </div>
          </div>
          <div className=" md:w-[47%]  w-full  flex justify-center flex-col z-[20]">
            <div
              className="order-2 md:order-1 mt-[30px] lg:mt-0"
              data-aos="fade-left"
            >
              <h2 className=" font-normal lg:text-[48px] text-[40px] text-white ff_Anton leading-[120%] ">
                Nuestra Misión
              </h2>
              <p className=" font-medium text-[16px] ff_inter text-[#cccfd1] mt-[16px] leading-[160%]">
                Nuestra visión es ser líderes indiscutibles en la industria{" "}
                <span className=" lg:block">
                  de los juegos de azar y llevar nuestra pasión por el
                </span>{" "}
                <span className=" lg:block">
                  {" "}
                  entretenimiento más allá de las fronteras. Imagina un
                </span>{" "}
                <span className=" lg:block">
                  {" "}
                  mundo donde la emoción y la diversión no tengan límites,
                </span>{" "}
                y ese es el mundo que queremos crear contigo.
              </p>
              <button className="font-bold text-[16px] text-[#7af57a] ff_inter mt-[24px] ">
                Aprende más -->
              </button>
            </div>
            <div
              className=" pt-[50px] lg:pt-[60px] order-1 md:order-2"
              data-aos="fade-left"
            >
              <img className=" rounded-[16px] w-full" src={avaitur} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
