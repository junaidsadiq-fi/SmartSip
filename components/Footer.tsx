import Link from "next/link";
import { StarsBackground } from "./ui/stars-background";
import ShootingStars from "./ui/shooting-stars";
/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  return (
    <footer id="about" className="sm:h-screen overflow-hidden pt-32 py-24 bg-black">
      <div
        id="container"
        className=" px-6 sm:px-24 overflow-hidden w-full h-full"
      >
        <div className="w-full h-full justify-center items-center flex flex-col mb-6 sm:mb-0">
          <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10">
            Let's Connect{" "}
          </p>
          <ul className="flex justify-center sm:flex-row items-center sm:gap-6">
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://www.x.com" target="_blank">
                Twitter
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://web.whatsapp.com/" target="_blank">
                Whatsapp
              </Link>
            </li>
            <li className="flex gap-3 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-3 rounded-full px-3 py-1">
              <Link href="https://www.linkedin.com/" target="_blank">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
       {/*  <ShootingStars />
        <StarsBackground /> */}
      </div>
    </footer>
  );
};

export default FooterComponent;