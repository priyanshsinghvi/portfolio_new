import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const skillTags = [
  "Website design",
  "Figma",
  "Ui design",
  "Ui design",
  "User experience",
  "User interface",
  "Web app design",
  "Application design",
  "Plugin design",
];

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="flex w-full relative mt-8 sm:mt-12 md:mt-24 lg:mt-44 flex-col items-center gap-2.5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[360px] py-8 sm:py-12 md:py-16 lg:py-[90px] rounded-[20px] md:rounded-[28px] border-t [border-top-style:solid] border-[#ffffff1f] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
      <div className="flex flex-col w-full max-w-[1199.53px] items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[90px] relative">
        <header className="inline-flex flex-col items-center gap-4 sm:gap-6 md:gap-[29px] relative">
          <Badge className="inline-flex items-center gap-1 sm:gap-[5px] bg-[#ffffff0d] rounded-[100px] border-t [border-top-style:solid] border-[#ffffff14] px-2 sm:px-3 md:px-[13px] py-2 sm:py-2.5 md:py-[13px] h-auto hover:bg-[#ffffff0d] transition-all">
            <div className="flex w-2.5 h-2.5 sm:w-3 sm:h-3 items-center justify-center gap-2.5 p-0.5 sm:p-1 relative rounded-md border border-solid border-[#ffffffbf]">
              <div className="relative w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#ffffffbf] rounded-sm" />
            </div>
            <span className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
              a AI engineer
            </span>
          </Badge>

          <p className="relative w-full max-w-[432.62px] [font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-6 sm:leading-7 px-4 sm:px-0">
            Designing clean, impactful interfaces with user-centered thinking.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-stretch gap-3 sm:gap-4 md:gap-[17px] relative w-full">
          <Card className="inline-flex h-auto lg:h-[713px] items-start gap-2.5 p-2.5 sm:p-3 md:p-3.5 bg-[#ffffff12] rounded-[10px] md:rounded-[15px] border-t [border-top-style:solid] border-[#ffffff14] hover:border-[#ffffff2f] transition-all duration-300">
            <CardContent className="flex flex-col w-full max-w-[465.07px] items-end gap-4 sm:gap-5 md:gap-6 p-0">
              <img
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded"
                alt="Profile"
                src="/rectangle-11.svg"
              />

              <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-9 relative w-full">
                <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-[22px] relative w-full">
                  <h2 className="relative w-full bg-[linear-gradient(90deg,rgba(255,255,255,1)_38%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-normal text-transparent text-lg sm:text-xl md:text-2xl tracking-[0] leading-6 sm:leading-7">
                    Hey i am Priyansh Singhvi
                  </h2>

                  <p className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xs sm:text-sm tracking-[0] leading-5 sm:leading-[22px]">
                    I am a UI/UX Designer and Front-End Developer who loves
                    turning ideas into visually compelling, user-friendly
                    experiences.
                  </p>

                  <img
                    className="relative flex-[0_0_auto] w-full max-w-[120px] sm:max-w-none"
                    alt="Social media links"
                    src="/frame-112.svg"
                  />
                </div>

                <Separator className="w-full h-px bg-[#ffffff1f]" />

                <Button className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-[22px] py-3 sm:py-4 md:py-6 h-auto bg-colorsmint rounded-[100px] backdrop-blur-[11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11px)_brightness(100%)] hover:bg-colorsmint/90 hover:shadow-[0_0_20px_rgba(239,239,239,0.4)] font-medium text-black [font-family:'Poppins',Helvetica] text-sm sm:text-base tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-300 w-full sm:w-auto">
                  Contact Now
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="inline-flex h-auto lg:h-[713px] items-center gap-2.5 p-4 sm:p-5 md:p-[22px] bg-[#ffffff0d] rounded-[10px] md:rounded-[15px] border-t [border-top-style:solid] border-[#ffffff14] hover:border-[#ffffff2f] transition-all duration-300">
            <CardContent className="flex flex-col w-full max-w-[645.47px] items-start gap-4 sm:gap-6 md:gap-[30px] p-0">
              <p className="relative w-full [font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-sm sm:text-base md:text-lg tracking-[0] leading-6 sm:leading-7 md:leading-[26px]">
                I believe that design is not just how it looks but how it works.
                Each project I take on is crafted with attention to detail,
                ensuring it aligns with the goals of the business while offering
                users a seamless experience.
              </p>

              <Separator className="w-full h-px bg-[#ffffff1f]" />

              <div className="flex flex-wrap w-full max-w-[581px] items-start gap-1.5 sm:gap-2 md:gap-[8px] relative">
                {skillTags.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="inline-flex items-center justify-center gap-2.5 px-2 sm:px-2.5 py-2 sm:py-2.5 md:py-3.5 h-auto bg-black rounded-[5px] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer"
                  >
                    <span className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-white text-[10px] sm:text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                      {skill}
                    </span>
                  </Badge>
                ))}
              </div>

              <Separator className="w-full h-px bg-[#ffffff1f]" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
