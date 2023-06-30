import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimateText from "../components/AnimateText";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-picwhite.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from "../components/TransitionEffect";

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About page </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          {/* <AnimateText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          /> */}
          <AnimateText
            text="La pasión Alimenta el propósito!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col justify-start xl:col-span-4 md:order-2  md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-left text-dark/75 dark:text-light/75 ">
                SOBRE MÍ
              </h2>
              <p className="font-medium my-4">
                Hola 👋, soy un desarrollador web Full Stack, tengo la capacidad
                de realizar proyectos completos, me motiva seguir aprendiendo
                nuevas habilidades día a día, en busca de nuevas tendencias y
                mejores prácticas en el desarrollo web.
              </p>
              <p className="font-medium my-4">
                He participado en proyectos grupales, donde he obtenido
                excelentes resultados gracias a mi capacidad de aprendizaje y
                compromiso.
              </p>
              <p className="font-medium my-4">
                Gracias a mi enfoque tanto en el Front-end como en el Back-end,
                me permite comprender y abordar los desafíos desde diferentes
                ángulos, asegurando la coherencia, eficiencia en todo el
                proyecto y resolución de problemas.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt=""
                className="w-full h-auto rounded-2xl  "
                priority
                sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="font-bold inline-block text-7xl sm:text-5xl xs:text-4xl  ">
                  <AnimateNumbers value={2} />+
                </span>
                <h2 className="text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Clientes
                </h2>
              </div>
              <div className="flex flex-col items-end justify-between xl:items-center">
                <span className="font-bold inline-block text-7xl sm:text-5xl xs:text-4xl">
                  <AnimateNumbers value={4} />+
                </span>
                <h2 className="text-x1 font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Proyectos
                </h2>
              </div>
              <div className="flex flex-col items-end justify-between xl:items-center">
                <span className="font-bold inline-block text-7xl sm:text-5xl xs:text-4xl">
                  <AnimateNumbers value={8} />+
                </span>
                <h2
                  className="text-x1 font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm "
                >
                  Experiencia (meses)
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
