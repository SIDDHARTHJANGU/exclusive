import React from "react";
import seceightimg from "../assets/img/sec8img.png";
import { Clints, Lightone, Ticks } from "./Mysvg";
import silver from "../assets/img/silver.png";
import btnline from "../assets/img/btn-white.svg";
import btnunder from "../assets/img/btn-under.svg";
import platinum from "../assets/img/platinum.png";
import green from "../assets/img/luxurygreen.png";
import diomend from "../assets/img/dyomend.png";
import dice from "../assets/img/dice.png";
import headrcard from "../assets/img/heardcard.png";
import shadow from "../assets/img/shadow.png";

export const ParaElegirnos = () => {
  return (
    <div className=" pt-[50px] lg:pt-[100px] relative">
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute top-[-10%] left-[-15%] hidden md:block  "></div>
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute top-[10%] right-[-20%]  "></div>
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute bottom-[8%] left-[-20%]  "></div>
      <div className=" w-[484px] h-[484px]  rounded-[484px] ellips absolute bottom-[-13%] right-[-20%]  "></div>
      <div className=" container  mx-auto max-w-[1164px] px-3">
        <div className=" flex  flex-wrap lg:justify-between gap-8 lg:gap-0 justify-center ">
          <div
            className=" lg:w-[48%] w-full flex justify-center "
            data-aos="fade-right"
          >
            <img className=" rounded-[16px]" src={seceightimg} alt="img" />
          </div>
          <div
            className=" lg:w-[48%] w-full flex items-center lg:items-start flex-col"
            data-aos="fade-left"
          >
            <h2 className=" font-normal lg:text-[48px] text-[40px] text-white ff_Anton leading-[120%]">
              Más razones para elegirnos
            </h2>
            <div className=" px-[56px] py-[24px] para_card mt-[50px]">
              <div className=" flex items-center gap-[37px]">
                <Lightone />
                <div>
                  <p className=" font-normal text-[32px] ff_Anton text-white">
                    200
                  </p>
                  <p className=" text-[16px] font-medium text-white ff_inter">
                    Páginas creadas
                  </p>
                </div>
              </div>
            </div>
            <div className=" px-[56px] py-[24px] para_card mt-[23px]">
              <div className=" flex items-center gap-[37px]">
                <Clints />
                <div>
                  <p className=" font-normal text-[32px] ff_Anton text-white">
                    98%
                  </p>
                  <p className=" text-[15px] font-medium text-white ff_inter leading-[160%]">
                    Clientes Satisfechas
                  </p>
                </div>
              </div>
            </div>
            <div className=" px-[56px] py-[24px] para_card mt-[23px]">
              <div className=" flex items-center gap-[37px]">
                <Lightone />
                <div>
                  <p className=" font-normal text-[32px] ff_Anton text-white">
                    200
                  </p>
                  <p className=" text-[16px] font-medium text-white ff_inter">
                    Páginas creadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:pt-[150px] pt-[75px]">
        <div className=" text-center" data-aos="fade-down">
          <h3 className=" font-normal lg:text-[48px] text-[40px] text-white ff_Anton leading-[120%] ">
            Nuestras ofertas
          </h3>
          <p className=" text-[16px] font-medium ff_inter text-white leading-[160%] mt-[16px]">
            Te ofrecemos las mejores experiencias de juegos para tus clientes.
          </p>
        </div>
        {/* ----silver---- */}
        <div className=" container  mx-auto max-w-[1164px] px-3 relative">
          <div className=" w-[162px] h-[162px]  rounded-[162px] ellips3 absolute top-[13%] left-[13%] "></div>
          <div className=" flex flex-wrap lg:justify-between justify-center lg:items-center xl:items-start gap-10 lg:gap-0  mt-[32px] lg:mt-[64px] w-full  h-full border-[0.5px] border-[#839090] lg:pt-[57px] pt-[30px] pb-[37px] px-4 lg:px-[48px] rounded-[16px] silver_card">
            <div className=" lg:w-[58%] md:w-[75%]  w-full lg:mt-[20px]">
              <div className=" relative">
                <img className=" w-[100%]" src={silver} alt="img" />
                <img
                  className=" absolute left-0 bottom-[-12%] w-[95%]  mix-blend-multiply"
                  src={shadow}
                  alt="img"
                />
              </div>
            </div>
            <div
              className=" lg:w-[40%] w-full mt-10 lg:mt-0"
              data-aos="fade-left"
            >
              <h4 className=" font-normal text-[32px] ff_Anton text-white leading-[130%]">
                Silver
              </h4>
              <p className=" xl:text-[16px] lg:text-[14px] font-medium ff_inter text-[#cdd2d3] leading-[160%] mt-[16px]">
                Diseño predeterminado, atractivo y fácil de navegar,{" "}
                <span className=" lg:block">tecnología HTLM5.</span>
              </p>
              <p className=" text-[48px] font-normal ff_Anton text-white leading-[120%] mt-[32px]">
                $5000
              </p>
              <div className=" flex  gap-[8px] mt-[12px]">
                <Ticks />
                <p className=" xl:text-[16px] lg:text-[15px] text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                  Disponibles Payku, Pix, Depósitos en Euros,{" "}
                  <span className=" block">Criptomonedas, Cargas manuales</span>
                </p>
              </div>
              <div className=" flex  gap-[8px] mt-[12px]">
                <Ticks />
                <p className=" xl:text-[16px] lg:text-[15px] text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                  Control de RTP (controlás qué porcentaje pagar)
                </p>
              </div>
              <div className=" flex  gap-[8px] mt-[12px]">
                <Ticks />
                <p className=" xl:text-[16px] lg:text-[15px] text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                  Bonos Editables,Hours,Jackpots, Códigos{" "}
                  <span className=" block">Promocionales Regalo</span>
                </p>
              </div>
              <div className=" flex  gap-[8px] mt-[12px]">
                <Ticks />
                <p className=" xl:text-[16px] lg:text-[15px] text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                  Aplicación para Android y Windows de regalo.
                </p>
              </div>
              <div className=" flex  gap-[8px] mt-[12px]">
                <Ticks />
                <p className=" xl:text-[16px] lg:text-[15px] text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                  Tiempo de creación 2 a 3 semanas
                </p>
              </div>
              <div className=" relative z-[10]">
                <button className=" border-[1px] mt-[40px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px]  ">
                  Comprar ahora
                </button>
                <img
                  className=" absolute  bottom-[-4px] left-[-4px] z-[-2]"
                  src={btnline}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------luxury---- */}
      <div className=" mt-[32px] lg:mt-[64px]">
        <div className=" container  mx-auto max-w-[1164px] px-3">
          <div className="bg_luxury border-[0.5px] border-[#839090] px-2  rounded-[16px] lg:pt-[46px] pt-[23px] pb-[23px] lg:pb-[46px] relative ">
            <div>
              <img
                className=" absolute lg:top-[106px] top-[160px] lg:left-[224px] left-[80px] hidden sm:block "
                src={green}
                alt="img"
              />
              <img
                className=" absolute bottom-[90px] lg:left-[150px] left-[26px] w-[13%]  lg:w-[unset] hidden sm:block "
                src={diomend}
                alt="img"
              />
              <img
                className=" absolute lg:top-[110px] top-[150px] lg:right-[122px] right-[30px]  w-[13%]  lg:w-[unset] hidden sm:block "
                src={headrcard}
                alt="img"
              />
              <img
                className=" absolute bottom-[110px] lg:right-[180px] right-[70px] hidden sm:block "
                src={dice}
                alt="img"
              />
            </div>
            <div className=" text-center ">
              <p className=" font-normal text-[32px] text-white leading-[130%] ff_Anton">
                Luxury
              </p>
              <p className=" font-medium text-[16px] ff_inter text-[#cdd5d6] leading-[160%] mt-[16px]">
                lleva tu experiencia de juego al siguiente nivel. Con{" "}
                <span className=" md:block">
                  todas las características de la versión Silver y la
                </span>{" "}
                potencia adicional de la tecnología React .
              </p>
              <p className=" font-normal lg:text-[48px] text-[40px] text-white ff_Anton leading-[120%] pt-[32px]">
                $9000
              </p>
              <div className=" flex justify-center">
                <div className=" flex  flex-col  items-start">
                  <div className=" flex  justify-center gap-[8px] mt-[16px]  w-full text-center">
                    <Ticks />
                    <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]  w-full text-center">
                      Disponibles Payku, Pix, Depósitos en Euros,{" "}
                      <span className=" block">
                        {" "}
                        Criptomonedas, Cargas manuales
                      </span>
                    </p>
                  </div>
                  <div className=" flex  justify-center gap-[8px] mt-[12px]  w-full text-center">
                    <Ticks />
                    <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]  w-full text-center">
                      Control de RTP (controlás qué porcentaje pagar)
                    </p>
                  </div>
                  <div className=" flex  justify-center gap-[8px] mt-[12px]  w-full text-center">
                    <Ticks />
                    <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]  w-full text-center">
                      Bonos Editables, Happy Hours, Jackpots, Códigos{" "}
                      <span className=" block"> Promocionales Regalo</span>
                    </p>
                  </div>
                  <div className=" flex  justify-center gap-[8px] mt-[12px]  w-full text-center">
                    <Ticks />
                    <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]  w-full text-center">
                      Aplicación para Android y Windows de regalo.{" "}
                    </p>
                  </div>
                  <div className=" flex  justify-center gap-[8px] mt-[12px] w-full text-center">
                    <Ticks />
                    <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]  w-full text-center">
                      Tiempo de creación 2 a 3 semanas
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center">
                <div className=" relative  z-[10]">
                  <button className=" font-bold text-[16px] text-black ff_inter comn_btn py-[13px] px-[46px] mt-[36px]">
                    Comprar ahora
                  </button>
                  <img
                    className=" absolute  bottom-[-4px] left-[-4px] z-[-1]"
                    src={btnunder}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----platinum------ */}
      <div>
        <div className=" container  mx-auto max-w-[1164px] px-3 relative z-[50]">
          <div className=" w-[162px] h-[162px]  rounded-[162px] ellips3 absolute top-[15%] right-[13%] z-[-10] "></div>
          <div className=" flex flex-wrap  lg:justify-between justify-center text-center  lg:text-start items-center mt-[32px] lg:mt-[64px] w-full   h-full border-[0.5px] border-[#839090] lg:pt-[78px] pt-[35px] pb-[35px] lg:pb-[80px] px-4 lg:px-[48px] rounded-[16px] silver_card">
            <div className=" lg:w-[50%] w-full" data-aos="fade-right">
              <h4 className=" font-normal text-[32px] ff_Anton text-white leading-[130%]">
                Platinum
              </h4>
              <p className=" text-[16px] font-medium ff_inter text-[#cdd2d3] leading-[160%] mt-[16px]">
                Diseño totalmente personalizado. Contáctanos{" "}
                <span className=" lg:block">para un presupuesto.</span>
              </p>
              <p className=" lg:text-[48px] text-[40px] font-normal ff_Anton text-white leading-[120%] mt-[32px]">
                Consultar precio
              </p>
              <div className=" flex  gap-[8px] mt-[12px] justify-center lg:justify-start">
                <Ticks />
                <p className=" text-[16px] font-medium text-[#cdd0d2] ff_inter leading-[160%]">
                  Personalizable
                </p>
              </div>

              <div className=" flex justify-center lg:justify-start">
                <div className=" relative z-[10]">
                  <button className=" border-[1px] mt-[40px] border-[#fff] font-bold text-[16px] ff_inter text-white px-[46px] py-[13px] rounded-[41px]  ">
                    Comprar ahora
                  </button>
                  <img
                    className=" absolute  bottom-[-4px] left-[-4px] z-[-2]"
                    src={btnline}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div
              className=" lg:w-[50%] md:w-[75%] w-full mt-10 lg:mt-0"
              data-aos="fade-left"
            >
              <img className=" w-[100%]" src={platinum} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
