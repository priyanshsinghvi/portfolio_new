import React from "react";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms and condensation", href: "#terms" },
  ];

  return (
    <footer className="flex flex-col md:flex-row w-full items-start justify-between gap-8 px-4 md:px-12 py-12 md:py-[103px] bg-transparent border-t border-[#ffffff1f] mt-12 md:mt-[200px]">
      <div className="flex flex-col items-start gap-[79px]">
        <div className="inline-flex items-center gap-1.5">
          <img className="w-[26px] h-[26px]" alt="Exclude" src="/exclude.svg" />
          <div className="bg-[linear-gradient(180deg,rgba(231,231,231,1)_0%,rgba(100,100,100,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-medium text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Pfolio
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-4 md:gap-[26px]">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-base tracking-[0] leading-[normal] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-base tracking-[0] leading-[normal]">
          @pfolio all right reserve
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end gap-8 md:gap-[170px]">
        <img className="flex-[0_0_auto]" alt="Frame" src="/frame-189.svg" />

        <nav className="flex flex-wrap items-center gap-4 md:gap-[45px]">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-base tracking-[0] leading-[normal] underline whitespace-nowrap hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
