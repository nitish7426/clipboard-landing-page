import React from "react";
import { google, ibm, microsoft, hp, vector } from "./assets";

const Clients = () => {
  const images = [google, ibm, microsoft, hp, vector];
  return (
    <section className="flex flex-col justify-center items-center md:flex-row gap-y-16 py-16 md:justify-evenly">
      {images.map((value) => (
        <img className="w-32" key={value} src={value} alt="" />
      ))}
    </section>
  );
};

export default Clients;
