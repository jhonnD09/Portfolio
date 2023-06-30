import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experiencia
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0  w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]   "
        />

        <ul className="w'full flex flex-col justify-between items-start ml-4 xs:ml-2">
          <Details
            position="Desarrollador Web Full Stack"
            company="Henry"
            time="May. 2023 - Jun. 2023"
            address="Henry"
            companyLink={"https://www.soyhenry.com/"}
            work="Trabaje en una aplicación web que simula a un Marketplace, fue realizado con un equipo de 
            estudiantes y amigos del Bootcamp de SoyHenry. Yo pertenecí al grupo de Front-end y 
            la aplicación ofrece tales servicios como: Buscar productos por nombre, Publicar nuevos 
            productos, Calificar productos, Comprar o vender productos y más. 
            En este proyecto trabajé como desarrollador Front-end, la experiencia de usuario y en el 
            desarrollo de componentes utilizados en distintas vistas, además estuve involucrado en 
            la creación del dashboard, estilos y actualización del producto. Se utilizó el marco de 
            trabajo de la metodología ágil Scrum"
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
