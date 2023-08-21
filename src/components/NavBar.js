import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "./Logo";
import TwiterNew from "../../public/images/twitter_mix.gif";
import {
  CircularText,
  DribbbleIcon,
  GithubIcon,
  LinkArrow,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 dark:bg-light
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2 `}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 dark:bg-dark
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center 
    justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className=" flex-col justify-center  items-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? " rotate-45 translate-y-1" : "-translate-y-0.5 "
          }  `}
        ></span>

        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>

        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Inicio" className="mr-4" />
          <CustomLink href="/about" title="Sobre mí" className="mx-4" />
          <CustomLink href="/projects" title="Proyectos" className="mx-4" />
          {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
        </nav>
        <nav className="flex justify-center items-center  flex-wrap">
          <motion.a
            href="https://twitter.com/jhonnDiaz5"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            {/* <TwitterIcon /> */}
            <Image src={TwiterNew} alt="Twiter" />
          </motion.a>
          <motion.a
            href="https://github.com/jhonnD09"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jhonn-diaz-77968b244/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            } `}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed 
    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
          </nav>

          <nav className="flex justify-center items-center  flex-wrap mt-3">
            <motion.a
              href="https://twitter.com/jhonnDiaz5"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              {/* <TwitterIcon /> */}
              <Image src={TwiterNew} alt="Twiter" />
            </motion.a>
            <motion.a
              href="https://github.com/jhonnD09"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jhonn-diaz-77968b244/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              className={`ml-5 sm:mx-1  flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              } `}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 -translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
