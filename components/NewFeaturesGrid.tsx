import {
    BellIcon,
    CalendarIcon,
    MobileIcon,
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "@/components/ui/bentogrid";
  import { HandIcon, ShieldIcon } from "lucide-react";
  
  const features = [
    {
      Icon: MobileIcon,
      name: "Real-Time Tracking",
      description: "Keep track of your water intake with real-time data displayed on your mobile device.",
      href: "/",
      cta: "Learn more",
      background: <img src="/images/main.jpg" className="absolute w-128 h-128  opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 group-hover:scale-105",
    },
    {
      Icon: ShieldIcon,
      name: "Durable Design",
      description: "Crafted from high-quality stainless steel to ensure longevity and maintain temperature.",
      href: "/",
      cta: "Learn more",
      background: <img src="/images/appdesign.jpeg" className="absolute opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: HandIcon,
      name: "Stylish and Portable",
      description: "Sleek design with a comfortable handle, making it easy to carry wherever you go.",
      href: "/",
      cta: "Learn more",
      background: <img src="/images/bottlehand.png" className="absolute  opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Hydration Analytics",
      description: "Analyze your hydration patterns and get insights to improve your health and wellness.",
      href: "/",
      cta: "Learn more",
      background: <img src="/images/smartfeatures.jpeg" className="absolute opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Personalized Reminders",
      description: "Receive tailored reminders to drink water based on your daily schedule and activity.",
      href: "/",
      cta: "Learn more",
      background: <img src="/images/hydration.jpeg"  className="absolute w-128 h-128  opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export async function NewFeaturesGrid() {
    return (
      <div id="features" className="bg-black p-20">
        <div className="flex flex-col items-center justify-center p-16 gap-2 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center  font-semibold leading-none text-transparent dark:from-white text-4xl sm:text-6xl lg:text-8xl dark:to-slate-900/10">
          Features
        </div>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    );
  }