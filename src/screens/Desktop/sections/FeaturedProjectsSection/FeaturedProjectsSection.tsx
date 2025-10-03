import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const projectsData = [
  {
    image: "/home--2--1.png",
    icon: "/frame-5.svg",
    title: "Discovery",
    description:
      "We begin by understanding your goals, target audience, and brand to align the design with your vision.",
    tags: ["React", "React", "React", "React"],
    logo: "/image-1-3.png",
  },
  {
    image: "/home--2--2.png",
    icon: "/frame-5.svg",
    title: "Discovery",
    description:
      "We begin by understanding your goals, target audience, and brand to align the design with your vision.",
    tags: ["React", "React", "React", "React"],
    logo: "/image-1-3.png",
  },
  {
    image: "/home--2--3.png",
    icon: "/frame-5.svg",
    title: "Discovery",
    description:
      "We begin by understanding your goals, target audience, and brand to align the design with your vision.",
    tags: ["React", "React", "React", "React"],
    logo: "/image-1-3.png",
  },
];

export const FeaturedProjectsSection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center gap-9 px-4 py-[90px] rounded-[28px] border-t [border-top-style:solid] border-[#ffffff1f] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
      <header className="inline-flex flex-col items-center gap-[29px]">
        <div className="inline-flex flex-col items-center justify-center gap-2.5 p-[13px] bg-[#ffffff0d] rounded-[100px] border-t [border-top-style:solid] border-[#ffffff14]">
          <div className="inline-flex items-center gap-[5px]">
            <div className="flex w-3 h-3 items-center justify-center gap-2.5 p-1 rounded-md border border-solid border-[#ffffffbf]">
              <div className="w-1 h-1 bg-[#ffffffbf] rounded-sm" />
            </div>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              my work
            </p>
          </div>
        </div>

        <h2 className="[font-family:'Poppins',Helvetica] font-normal text-white text-3xl md:text-5xl lg:text-[62px] tracking-[0] leading-[normal] text-center">
          Featured Projects
        </h2>

        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-base text-center tracking-[0] leading-7 whitespace-nowrap">
          Real words from people I&apos;ve worked with.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] w-full max-w-[1364px]">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="bg-[#ffffff0d] rounded-[15px] border-t [border-top-style:solid] border-[#ffffff1f] overflow-hidden"
          >
            <CardContent className="p-0">
              <img
                className="w-full h-[225px] object-cover"
                alt="Project preview"
                src={project.image}
              />

              <div className="p-[25px] flex flex-col gap-0">
                <div className="opacity-50 flex flex-col gap-[10px]">
                  <img
                    className="w-8 h-8"
                    alt="Project icon"
                    src={project.icon}
                  />

                  <h3 className="mt-[30px] [font-family:'Poppins',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[31.3px] whitespace-nowrap">
                    {project.title}
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#ffffffbf] text-base tracking-[0] leading-[31.3px]">
                    {project.description}
                  </p>

                  <img
                    className="w-full h-px mt-[13px]"
                    alt="Divider"
                    src="/vector-10.svg"
                  />

                  <div className="flex flex-wrap gap-[10px] mt-[21px]">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-[#00000038] rounded-[100px] border border-solid border-[#ffffff33] px-2.5 py-2.5 h-auto"
                      >
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                          {tag}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>

                <img
                  className="w-[168px] h-[23px] object-cover mt-[10px]"
                  alt="Project logo"
                  src={project.logo}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="w-full max-w-[838px] bg-[#ffffff0d] rounded-2xl border-t [border-top-style:solid] border-[#ffffff1f]">
        <CardContent className="px-[25px] py-[27px]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[76px]">
            <div className="flex flex-col gap-[18px] flex-1">
              <div className="inline-flex items-center gap-3">
                <img className="w-6 h-6" alt="Icon" src="/frame-19.svg" />
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[31.3px] whitespace-nowrap">
                  Grow Your Digital Presence
                </h3>
              </div>

              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#ffffffbf] text-base tracking-[0] leading-[31.3px]">
                Partnering with creators and businesses to design websites users
                love.
              </p>
            </div>

            <Button
              variant="outline"
              className="bg-[#ffffff0d] rounded-[100px] border border-solid border-[#ffffff14] backdrop-blur-[11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11px)_brightness(100%)] px-[22px] py-6 h-auto"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#b8b8b8] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Our Project&apos;s
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
