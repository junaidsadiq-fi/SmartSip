import Link from "next/link";
import ShootingStars from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import Image from "next/image";
/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  return (
    <>
    <footer id="about" className="relative sm:h-screen overflow-hidden pt-60 bg-black">
      <div id="container" className="relative px-12 sm:px-4 overflow-hidden w-full h-full">
        <div className="flex flex-col sm:flex-row items-center justify-around mx-64 mb-2 sm:gap-1">
          <div className="w-full h-full justify-center items-center sm:flex-row mb-2 sm:mb-0">
            <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold text-transparent dark:from-white dark:to-slate-900/10">
              Let's Connect{" "}
            </p>
            <ul className="flex justify-center sm:flex-row items-center sm:gap-3 mt-4 sm:mt-0">
              <li className="flex gap-2 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-2 rounded-full px-2 py-1">
                <Link href="https://www.x.com" target="_blank">
                  Twitter
                </Link>
              </li>
              <li className="flex gap-2 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-2 rounded-full px-2 py-1">
                <Link href="https://web.whatsapp.com/" target="_blank">
                  Whatsapp
                </Link>
              </li>
              <li className="flex gap-2 border-2 border-white hover:bg-white text-white hover:text-black duration-300 mx-2 rounded-full px-2 py-1">
                <Link href="https://www.linkedin.com/" target="_blank">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-4 sm:mt-0 sm:ml-4">
            <Image src="/images/qrcode.png" alt="Footer Logo" className="rounded-xl opacity-90" width={200} height={200} />
            <p className="text-white mt-2">Scan to open the website</p>
          </div>
        </div>
      </div>
      <ShootingStars className="footer-shooting-stars" />
      <StarsBackground className="footer-stars-background" />
    </footer>
    </>
  );
};

export default FooterComponent;
