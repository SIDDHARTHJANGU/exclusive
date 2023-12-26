import { useState } from "react";
import { Nagtive, Positive } from "./Mysvg";

export const Mas = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };
  const accordianData = [
    {
      id: 1,
      heading:
        "¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?",
      para: "En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 2,
      heading:
        "¿Cómo garantizan la seguridad de las operaciones en sus juegos?",
      para: " En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 3,
      heading:
        " ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?",
      para: " En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 4,
      heading:
        "¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?",
      para: "  En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 5,
      heading: "¿Qué métodos de pago aceptan?",
      para: "  En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
    {
      id: 6,
      heading: "¿Puedo probar sus juegos antes de comprometerme?",
      para: "  En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.",
    },
  ];
  return (
    <>
      <div
        id="Faqs"
        className=" faq-main-div lg:pb-[150px] pb-[75px] lg:pt-[85px] pt-[40px] relative"
      >
        <div className=" w-[396px] h-[396px]  rounded-[396px] ellips absolute top-[-10%] left-[-10%] "></div>
        <div className="relative container max-w-[1164px] mx-auto  px-3 ">
          <p
            className=" text-white font-normal lg:text-[48px] text-[40px] ff_Anton leading-[120%] text-center pb-[28px]"
            data-aos="fade-down"
          >
            Preguntas más frecuentes
          </p>
          {accordianData.map((data, index) => (
            <div
              key={index}
              className="accordian-main  mx-auto mt-[32px] w-full max-w-[970px] overflow-hidden border-[0.5px] border-[#80898d] px-[20px] py-[14px] rounded-[6px]  "
              open={openAccordion === index}
              data-aos="fade-down"
            >
              <div onClick={() => toggleAccordion(index)} className="py-1 flex">
                <h2 className="accordian-heading text-white ff_Anton font-normal leading-[130%] lg:text-[20px] text-[15px]  flex justify-between  items-center text-start w-full cursor-pointer ">
                  {data.heading}
                </h2>
                <span>
                  {openAccordion === index ? <Nagtive /> : <Positive />}
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-linear pt-0 pb-0 ${
                  openAccordion === index ? "sm:h-[65px] h-[100px]" : "h-[0px]"
                }`}
              >
                <p
                  className="font-medium lg:text-[16px] text-[14px] ff_inter text-[#ccd0d1] leading-[160%] max-w-[850px]  
                 pb-0 pt-3"
                >
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mas;
