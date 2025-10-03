import { ChevronDown as ChevronDownIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navLinks = [
  { label: "Home" },
  { label: "About" },
  { label: "Skills" },
  { label: "Projects" },
  { label: "Contact Us" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full max-w-[897px] mx-auto px-4 sm:px-6 lg:px-4">
      <nav className="flex h-auto min-h-[60px] w-full items-center justify-between px-4 sm:px-5 lg:px-3.5 py-2 md:py-1 bg-[#ffffff0d] rounded-[100px] border border-solid border-[#1f1f1f] gap-3 sm:gap-4">
        <div className="inline-flex items-center gap-1.5 sm:gap-[7px]">
          <img className="w-5 h-5 sm:w-[26px] sm:h-[26px]" alt="Exclude" src="/exclude.svg" />
          <div className="bg-[linear-gradient(180deg,rgba(231,231,231,1)_0%,rgba(100,100,100,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-medium text-base sm:text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Pfolio
          </div>
        </div>

        <div className="hidden lg:inline-flex items-center gap-4 xl:gap-[26px]">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-sm xl:text-base tracking-[0] leading-[normal] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          className="h-auto gap-1 px-3 sm:px-4 md:px-5 py-2 md:py-3.5 bg-[#ffffff0d] rounded-[100px] border border-solid border-[#ffffff14] hover:bg-[#ffffff1a]"
        >
          <img className="w-4 sm:w-5 md:w-[25px] h-4 sm:h-5 md:h-6" alt="Frame" src="/frame-1-1.svg" />
          <span className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Ai Support
          </span>
        </Button>
      </nav>

      <div className="inline-flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-[29px] mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-[189px] w-full">
        <Badge className="inline-flex items-center gap-1 sm:gap-[5px] px-2 sm:px-3 md:px-[13px] py-2 sm:py-2.5 md:py-[13px] bg-[#ffffff0d] rounded-[100px] border-t border-[#ffffff14] hover:bg-[#ffffff0d]">
          <div className="flex w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[17px] items-center justify-center gap-2.5 p-0.5 sm:p-1 rounded-md border border-solid border-[#ffffffbf] opacity-40">
            <div className="w-1 h-1 bg-[#ffffffbf] rounded-sm" />
          </div>
          <span className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            a lazy coder
          </span>
        </Badge>

        <h1 className="w-full max-w-[804px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(101,101,101,1)_87%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-[normal] text-center px-2 sm:px-4">
          Priyansh Singhvi
        </h1>

        <p className="max-w-[432.62px] [font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-6 sm:leading-7 px-4 sm:px-6 md:px-4">
          Crafting intuitive, modern UI/UX for startups, agencies, and creators.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto px-4 sm:px-0">
          <Button
            variant="ghost"
            className="h-auto gap-2 px-4 sm:px-5 md:px-6 lg:px-[22px] py-3 sm:py-4 md:py-5 lg:py-6 bg-[#ffffff0d] rounded-[100px] border border-solid border-[#ffffff14] backdrop-blur-[11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11px)_brightness(100%)] hover:bg-[#ffffff1a] w-full sm:w-auto"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-[#b8b8b8] text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Our Project&apos;s
            </span>
          </Button>

          <Button className="h-auto gap-2 px-4 sm:px-5 md:px-6 lg:px-[22px] py-3 sm:py-4 md:py-5 lg:py-6 rounded-[100px] backdrop-blur-[11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11px)_brightness(100%)] bg-[linear-gradient(172deg,rgba(239,239,239,1)_0%,rgba(115,114,114,1)_100%)] hover:opacity-90 w-full sm:w-auto">
            <span className="font-medium text-black [font-family:'Poppins',Helvetica] text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Contact Now
            </span>
          </Button>
        </div>
      </div>

      <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-[107px] text-white" />
    </section>
  );
};
