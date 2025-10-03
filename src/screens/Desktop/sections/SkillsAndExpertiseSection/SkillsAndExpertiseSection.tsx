import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Palette, Server, Database, Cloud, Wrench, TestTube, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Palette,
    title: "Frontend",
    skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST API"]
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma"]
  },
  {
    icon: Cloud,
    title: "DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Git"]
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "Figma", "Postman", "Jira"]
  },
  {
    icon: TestTube,
    title: "Testing",
    skills: ["Jest", "Cypress", "Playwright", "Vitest"]
  },
  {
    icon: GitBranch,
    title: "Practices",
    skills: ["Agile", "TDD", "Clean Code", "SOLID"]
  },
];

export const SkillsAndExpertiseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full self-center relative mt-10 pt-8 md:pt-[83px] pb-12 md:pb-20 px-4 md:px-12 lg:px-[115px] rounded-[28px] border-t [border-top-style:solid] border-[#ffffff1f] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
      <div className="w-full max-w-[1208px] mx-auto flex flex-col items-start gap-8 sm:gap-12 md:gap-16">
        <div className="flex flex-col items-start gap-8 sm:gap-12 md:gap-[66px] w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-0 w-full">
            <div className="inline-flex flex-col items-start gap-4 sm:gap-6 md:gap-[29px]">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-1 sm:gap-[5px] px-2 sm:px-3 md:px-[13px] py-2 sm:py-2.5 md:py-[13px] bg-[#ffffff0d] rounded-[100px] border-t [border-top-style:solid] border-[#ffffff14] h-auto"
              >
                <div className="flex w-2.5 h-2.5 sm:w-3 sm:h-3 items-center justify-center gap-2.5 p-0.5 sm:p-1 rounded-md border border-solid border-[#ffffffbf]">
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#ffffffbf] rounded-sm" />
                </div>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xs sm:text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  tech stack
                </span>
              </Badge>

              <h2 className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight">
                skills and expertise
              </h2>

              <p className="w-full max-w-[432.62px] [font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xs sm:text-sm tracking-[0] leading-5 sm:leading-6">
                Full-stack development expertise across modern technologies and frameworks.
              </p>
            </div>

            <Button className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-[100px] backdrop-blur-[11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11px)_brightness(100%)] bg-[linear-gradient(172deg,rgba(239,239,239,1)_0%,rgba(115,114,114,1)_100%)] h-auto hover:opacity-90 hover:shadow-[0_0_25px_rgba(239,239,239,0.4)] transition-all duration-300 w-full sm:w-auto">
              <span className="font-medium text-black [font-family:'Poppins',Helvetica] text-xs sm:text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Now
              </span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-[#0a0a0a] border border-[#ffffff14] rounded-[12px] p-4 md:p-5 hover:border-[#ffffff2f] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group"
              >
                <CardContent className="p-0 flex flex-col gap-3 md:gap-4">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white opacity-80 group-hover:opacity-100 transition-opacity" />

                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-[normal]">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-[#1a1a1a] border border-[#ffffff1a] text-[#b8b8b8] px-2 py-1 rounded-[6px] hover:bg-[#2a2a2a] hover:text-white hover:border-[#ffffff33] transition-all duration-200 cursor-default text-[10px] sm:text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
