import StickyBottomNavigation from "@/components/StickyBottomNavigation";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col w-full text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="order-2 lg:order-1 lg:mt-32 sm:mb-40 flex gap-4 flex-col items-center">
            <a
              href="#"
              target="_blank"
              className="px-6 py-3 bg-transparent text-white border border-white rounded-full w-max"
            >
              Created by Abdullah Asim.
            </a>
            <h1 className="text-center text-6xl tracking-tighter font-bold">
              Smart Sip <br /> advanced water bottle
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
    </div>
  );
}
