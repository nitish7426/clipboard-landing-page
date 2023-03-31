import React from "react";
import { devices } from "./assets";

const Access = () => {
  return (
    <section className="px-8 py-16 text-center space-y-6">
      <h2 className="text-2xl font-semibold text-neutral-1">
        Access Clipboard Anywhere
      </h2>
      <p className="text-neutral-2 max-w-xl mx-auto">
        Whether you're on the go, or at your computer, you can access all your
        clipboard snippets in a few simple clicks.
      </p>
      <img className="mx-auto" src={devices} alt="" />
    </section>
  );
};

export default Access;
