import React from "react";
import { logo, facebook, twitter, instagram } from "./assets";

const Footer = () => {
  const links = [
    "FAQs",
    "Contact Us",
    "Privacy Policy",
    "Press Kit",
    "Install Guide",
  ];
  const socials = [facebook, twitter, instagram];
  return (
    <footer className="bg-neutral-2/10 py-16 px-8 md:px-12 lg:px-20 flex flex-col items-center gap-12 md:flex-row md:justify-between">
      <img className="h-14" src={logo} alt="" />
      <nav className="flex flex-col items-center gap-6 text-lg font-medium text-neutral-1 md:flex-row md:flex-wrap">
        {links.map((link) => (
          <a key={link} href="">
            {link}
          </a>
        ))}
      </nav>
      <div className="flex gap-8 items-center">
        {socials.map((value) => (
          <a
            key={value}
            aria-label={value}
            className="hover:opacity-80 duration-200 transition-colors"
            href=""
          >
            <img src={value} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
