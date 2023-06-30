import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="border-t-2 border-solid border-dark w-full
     font-medium text-lg  text-dark dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col-reverse lg:py-6 ">
        <span>&copy; {new Date().getFullYear()} </span>
        <div className="flex items-center lg:py-2">
          Desarrollado con
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          por &nbsp; <Link href="/">Jhonn Diaz</Link>
        </div>
        {/* <Link href="/"> Say Hello </Link> */}
      </Layout>
    </footer>
  );
}

export default Footer;
