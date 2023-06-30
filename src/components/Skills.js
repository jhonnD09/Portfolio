import React from "react";
import { motion } from "framer-motion";
import {
  BootstrapIcon,
  CSSIcon,
  ExpressIcon,
  FigmaIcon,
  HTMLIcon,
  JavaScriptIcon,
  LinkArrow,
  NextJSIcon,
  NodeIcon,
  PostGreSQLIcon,
  ReactICon,
  ReduxIcon,
  SequelizeIcon,
  TailwindIcon,
  TwitterIcon,
} from "./Icons";

const Skill = ({ name, x, y, component }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
  bg-dark text-light py-2.5 px-6 shadow-dark cursor-pointer absolute
   dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
   xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {component} {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
      md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill
          name={"CSS"}
          x="-5vw"
          y="-10vw"
          component={<CSSIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"HTML"}
          x="18vw"
          y="8vw"
          component={<HTMLIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"ReactJS"}
          x="1vw"
          y="14vw"
          component={<ReactICon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"JavaScript"}
          x="-30vw"
          y="-5vw"
          component={<JavaScriptIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"Redux"}
          x="8vw"
          y="-18vw"
          component={<ReduxIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"ExpressJS"}
          x="-15vw"
          y="-1vw"
          component={<ExpressIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"NodeJS"}
          x="-35vw"
          y="10vw"
          component={<NodeIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"NextJS"}
          x="35vw"
          y="9vw"
          component={<NextJSIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"Bootstrap"}
          x="0vw"
          y="23vw"
          component={<BootstrapIcon className=" mr-2 xs:hidden " />}
        />

        <Skill
          name={"TailwindCSS"}
          x="30vw"
          y="-15vw"
          component={<TailwindIcon className=" w-[22px] mr-3 xs:hidden " />}
        />

        <Skill
          name={"Figma"}
          x="-19vw"
          y="-19vw"
          component={<FigmaIcon className=" w-[22px] mr-3 xs:hidden " />}
        />

        <Skill
          name={"PostGreSQL"}
          x="20vw"
          y="-5vw"
          component={<PostGreSQLIcon className=" w-[22px] mr-3 xs:hidden " />}
        />
      </div>
    </>
  );
}

export default Skills;
