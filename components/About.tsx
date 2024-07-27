

export const About = () => (
  <div className="bg-gray-950 w-full py-1 lg:py-1">
    <div className="mx-1">
      <div className="flex bg-black flex-col text-center bg-muted rounded-md gap-2 items-center min-w-full">
      <div className="absolute px-4 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col p-16 gap-2 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          About
          <p className="text-xl px-12 text-gray-400 leading-relaxed tracking-tight text-muted-foreground">
            SmartSip, the cutting-edge water bottle that combines smart
            technology with sleek design. Stay effortlessly hydrated with
            real-time tracking and personalized reminders right on your mobile
            device.
          </p>
        </div>
      </div>
    </div>
  </div>
);
