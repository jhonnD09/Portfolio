import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePicc from "../../public/images/profile/profile-picnow.png";
import AnimateText from "../components/AnimateText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import HireMe from "../components/HireMe";
import TransitionEffect from "../components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jhonn Diaz | Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-[45%] md:w-full">
              <Image
                src={profilePicc}
                alt="Jhonn"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 50vw"
              />
            </div>
            <div className="w-[54%] flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimateText
                text="Convirtiendo las ideas en realidad con código y diseño."
                className="!text-6xl !text-left dark:text-light 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xs:mt-6 "
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Como desarrollador full-stack, me dedico a convertir ideas en
                aplicaciones web innovadoras. Explore mis últimos proyectos y
                artículos, mostrando mi experiencia en diversas tecnologías de
                desarrollo web.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/CV_JhonnDiaz_ES.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark duration-300 dark:bg-light dark:text-dark 
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-2  md:text-sm   "
                  download={true}
                >
                  Descargar CV
                  <LinkArrow className=" ml-3 " />
                </Link>
                <Link
                  href="mailto:jhonndiaz58@gmail.com"
                  target={"_blank"}
                  className=" text-dark p-2.5 rounded-lg px-6 text-lg hover:text-dark 
                   border-2 border-solid border-transparent hover:border-dark ml-4 font-medium 
                   capitalize underline hover:dark:border-light dark:text-light sm:ml-1 md:text-base "
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
