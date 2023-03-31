import React from "react";

const Download = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-20 text-center space-y-6">
      <h3 className="text-2xl font-semibold text-neutral-1">
        Clipboard for iOS and Mac OS
      </h3>
      <p className="text-neutral-2 max-w-xl mx-auto">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </p>
      <div className="py-6 flex flex-col md:flex-row gap-6 md:justify-center">
        <button className="py-3 px-12 text-white bg-primary-1 rounded-full text-lg font-semibold border-b-[3px] border-black/20 shadow-xl shadow-primary-1/30 hover:opacity-90 transition-colors duration-200">
          Download for iOS
        </button>
        <button className="py-3 px-12 text-white bg-primary-2 rounded-full text-lg font-semibold border-b-[3px] border-black/20 shadow-xl shadow-primary-2/30 hover:opacity-90 transition-colors duration-200">
          Download for Mac
        </button>
      </div>
    </section>
  );
};

export default Download;
