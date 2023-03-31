import React from "react";
import { blacklist, text, preview } from "./assets";

const Workflow = () => {
  const list = [
    {
      id: 1,
      image: blacklist,
      heading: "Create blacklists",
      text: "Ensure sensitive information never makes its way to your clipboard by excluding certain souces",
    },
    {
      id: 2,
      image: text,
      heading: "Plain text snippets",
      text: "Remove unwanted formatting from copied text for a consintent look.",
    },
    {
      id: 3,
      image: preview,
      heading: "Sneak preview",
      text: "Quick preview of all snippets on your clipboard for easy access.",
    },
  ];
  return (
    <section className="px-8 py-16 md:px-12 lg:px-20 text-center space-y-4">
      <h2 className="text-2xl font-semibold text-neutral-1">
        Supercharge your workflow
      </h2>
      <p className="text-neutral-2">
        We've got the tools to boost you productivity
      </p>
      {/* grid */}
      <div className="text-center grid gap-12 pt-12 md:grid-cols-3">
        {list.map((value) => (
          <div className="space-y-4" key={value.id}>
            <img className="mx-auto" src={value.image} alt="" />
            <h3 className="text-2xl  font-semibold text-neutral-1">
              {value.heading}
            </h3>
            <p className="text-neutral-2">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
