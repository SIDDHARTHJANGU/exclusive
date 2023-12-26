import React from "react";
import footerlogo from "../assets/img/nav-logo.svg";
import { Facebook, Instagram, Lingdin, Mails, Phone } from "./Mysvg";

export const Myfooter = () => {
  return (
    <div className=" bg-black pt-[64px] relative overflow-hidden ">
      <div className=" w-[170px] h-[170px]  rounded-[170px] ellips2 absolute bottom-[-4%] left-[-4%] z-50  hidden sm:block "></div>
      <div className=" w-[170px] h-[170px]  rounded-[170px] ellips2 absolute top-[23%] right-[-4%] z-50 hidden sm:block "></div>
      <div className=" container mx-auto max-w-[1164px] px-3">
        <div className=" flex flex-wrap justify-between pb-[40px]">
          <div className="max-md:w-full">
            <img src={footerlogo} alt="img" />
            <p className=" font-medium text-[16px] ff_inter text-[#cccccc] leading-[160%] mt-[16px]">
              En Exclusive Games somos un equipo{" "}
              <span className=" lg:block">
                {" "}
                apasionado de personas dedicadas al desarrollo
              </span>{" "}
              de multiplataformas para juegos de azar
            </p>
            <div className=" flex items-center gap-3  mt-[24px]">
              <a href="https://www.instagram.com/?hl=en">
                {" "}
                <Instagram />
              </a>
              <a href="https://www.facebook.com/">
                {" "}
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/feed/">
                {" "}
                <Lingdin />
              </a>
            </div>
          </div>
          <ul className=" mt-9 lg:mt-0">
            <li className=" text-[16px] font-bold ff_inter text-white leading-[160%]">
              Menú principal
            </li>
            <li className=" mt-4">
              <a
                href="#Hogar"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                Hogar
              </a>
            </li>
            <li className=" mt-3">
              <a
                href="#Misión"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                Misión
              </a>
            </li>
            <li className=" mt-3">
              <a
                href="#Tragamonedas"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                Tragamonedas
              </a>
            </li>
            <li className=" mt-3">
              <a
                href="#elegirnos"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                Por qué elegirnos
              </a>
            </li>
            <li className=" mt-3">
              <a
                href="#Ofertas"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                Ofertas
              </a>
            </li>
          </ul>
          <ul className=" mt-9 lg:mt-0">
            <li className=" text-[16px] font-bold ff_inter text-white leading-[160%] hover:text-white duration-300">
              Atención al cliente
            </li>
            <li className=" mt-4">
              <a
                href="#Hogar"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                ¿Necesitas ayuda?
              </a>
            </li>
            <li className=" mt-3">
              <a
                href="#Misión"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                política de privacidad
              </a>
            </li>
            <li className=" mt-3">
              <a
                href="#Tragamonedas"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                Términos de servicios
              </a>
            </li>
          </ul>
          <ul className=" mt-9 lg:mt-0">
            <li className=" text-[16px] font-bold ff_inter text-white leading-[160%]">
              Ponerse en contacto
            </li>
            <li className=" mt-4 flex items-center gap-2">
              <div>
                <a href="mail">
                  {" "}
                  <Mails />
                </a>
              </div>
              <a
                href="#Hogar"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                juegosexclusivos@gmail.com
              </a>
            </li>
            <li className=" mt-3 flex items-center gap-2">
              <div>
                <a href="phone">
                  {" "}
                  <Phone />
                </a>
              </div>
              <a
                href="#Misión"
                className=" text-[16px] font-medium ff_inter text-[#cccccc] leading-[160%] hover:text-white duration-300"
              >
                (101)342-7873
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full h-[1px] bg-[#191919]"></div>
      <div className=" py-5">
        <p className=" font-medium text-[16px] ff_inter text-[#808080] text-center leading-[160%]">
          © Juegos exclusivos - Todos los derechos reservados 2023
        </p>
      </div>
    </div>
  );
};
