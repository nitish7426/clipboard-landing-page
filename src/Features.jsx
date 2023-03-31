import React from "react";
import { computer } from "./assets";

const Features = () => {
  const features = [
    {
      id: 1,
      heading: "Quick Search",
      text: "Easily search your snippets by content category, web address, application, and more",
    },
    {
      id: 2,
      heading: "iCloud Sync",
      text: "Instantly saves and syncs anippets across all your devices.",
    },
    {
      id: 3,
      heading: "Complete History",
      text: "Retrieve any snippets from the first moment you started using the app.",
    },
  ];
  return (
    <section className="px-8 py-16 md:px-12 lg:px-20 space-y-6 text-center">
      <h2 className="text-2xl font-semibold text-neutral-1">
        Keep track of you snippets
      </h2>
      <p className="text-neutral-2 max-w-xl mx-auto">
        clipbord instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>

      <div className="md:grid grid-cols-2 items-center gap-8">
        {/* image */}
        <div className="py-12">
          <img src={computer} alt="" />
        </div>
        {/* list */}
        <div className="text-center md:text-start space-y-8">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-2">
              <h3 className="text-2xl font-semibold text-neutral-1">
                {feature.heading}
              </h3>
              <p className="text-neutral-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
