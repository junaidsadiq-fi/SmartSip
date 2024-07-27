import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col w-full text-white relative">
        <div className="absolute top-10 left-20">
          <Image
            src="/images/whiteLogo.png"
            alt="Site Logo"
            width={150}
            height={150}
          />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
           {/*  <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            /> */}
            <div className="order-2 lg:order-1 lg:mt-60 sm:mb-10 flex gap-4 flex-col items-center">
              <a
                href="#"
                target="_blank"
                className="px-6 py-3 bg-transparent text-white border border-white rounded-full w-max"
              >
                Created by Abdullah Asim.
              </a>
              <h1 className="text-center text-6xl tracking-tighter font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Smart Sip <br /> advance water bottle
              </h1>
              <p className="text-[#666] ">
                concept by <a href="#">abdullah asim</a>
              </p>
              <BackgroundBeams />
            </div>
            <div className="order-1 lg:order-2 mt-24 flex justify-center items-center">
              <Image
                src="/images/bottlehand.png" // Update this with your actual image path
                alt="Hand holding the bottle"
                width={500} // Set appropriate width
                height={500} // Set appropriate height
                className="z-100"
              />
            </div>
          </div>
        </div>
        <ShootingStars className="footer-shooting-stars" />
        <StarsBackground className="footer-stars-background" />
      </div>
    </>
  );
}
