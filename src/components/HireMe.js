import React from "react";
import SvgComponent, { ImageRotate, WhatsappIcon } from "./Icons";
import { animate } from "framer-motion";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto
    fixed left-4 bottom-4 md:absolute sm:right-0
    "
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24 ">
        <ImageRotate
          className={"animate-spin-slow fill-dark dark:fill-light "}
        />

        <Link
          href="https://wa.me/qr/7FN7NLAU6HPSH1"
          target={"_blank"}
          className="flex items-center justify-center absolute
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-[80px] h-[80px] rounded-full
        font-semibold hover:bg-light hover:text-dark    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        md:w-12 md:h-12 md:text-[10px]
        "
        >
          <WhatsappIcon className=" w-24 sm:w-9  " />
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
