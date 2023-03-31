import React from "react";
import { header_desktop, header_mobile, logo } from "./assets";
const Header = () => {
  return (
    <header className="text-center pb-16">
      <div className="relative">
        <img
          className="absolute top-0 md:hidden w-full"
          src={header_mobile}
          alt=""
        />
        <img
          className="absolute top-0 hidden md:block"
          src={header_desktop}
          alt=""
        />
        <img className="isolate mx-auto pt-32 pb-16" src={logo} alt="" />
      </div>
      <div className="px-8 space-y-6">
        <h1 className=" text-3xl font-semibold text-neutral-1">
          A history of everything you copy
        </h1>
        <p className="text-neutral-2 max-w-xl mx-auto">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices
        </p>
        <div className="py-6 flex flex-col md:flex-row gap-6 md:justify-center">
          <button className="py-3 px-12 text-white bg-primary-1 rounded-full text-lg font-semibold border-b-[3px] border-black/20 shadow-xl shadow-primary-1/30 hover:opacity-90 transition-colors duration-200">
            Download for iOS
          </button>
          <button className="py-3 px-12 text-white bg-primary-2 rounded-full text-lg font-semibold border-b-[3px] border-black/20 shadow-xl shadow-primary-2/30 hover:opacity-90 transition-colors duration-200">
            Download for Mac
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
