import Image from "next/image";

const Arrow = ({ ...props }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <g id="Img">
        <path
          id="Vector"
          d="M2 5L6 8L10 5"
          stroke="white"
          strokeWidth="1.0625"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

function StickyBottomNavigation() {


  return (
    <nav className="fixed bottom-12 max-w-full gap-x-2 gap-y-2 rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#222325] transition-custom">
      <div className="w-full flex gap-x-2 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] justify-between items-center overflow-auto p-3 max-sm:p-2 transition-custom">
      <div className="flex items-center ml-auto">
          <Image
            src="/images/transparentlogo.png" 
            alt="Site Logo"
            width={40} 
            height={40}
            className="ml-4"
          />
        </div>
        <a href="#" className="menuLink">
          Home
        </a>

        <a href="#about" className="menuLink">
          About
        </a>

        <a href="#features" className="menuLink">
          Features
        </a>

        <a
          href="#contact"
          className="menuLink bg-[#36353a] hover:text-[#111] hover:bg-[#fff]"
        >
          About Me
        </a>

      </div>
    </nav>
  );
}

export default StickyBottomNavigation;
