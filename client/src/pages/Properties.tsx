import React from "react";
import PropertySection from "../components/PropertySection";

const Properties: React.FC = () => {
  return (
    <section>
      <div className="lg:px-0 mt-[50px] lg:mt-[0]">
        <div className="lg:grid md:grid-cols-2 grid-cols-1 lg:space-x-3 pb-10 lg:pb-0 lg:justify-between col-span-1">
          <div className="right  lg:block  relative overflow-hidden md:order-last">
            <div className="lg:block relative">
              <img
                src="./assets/home_img.svg"
                alt="home_img"
                height={100}
                width={100}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="py-16 md:py-0  w-full px-5 lg:px-8 left lg:w-fit lg:h-full relative items-center md:items-start justify-center lg:translate-y-2  flex flex-col mt-6 md:mt-0 space-y-4 lg:space-y-7 ">
            <h1 className="text-3xl font-bold md:text-5xl ">Our Properties</h1>
            <p className="text-[14px] text-center md:text-left md:text-sm text-[#808080] md:w-4/5">
              We offer the best and you will love what you see
            </p>
          </div>
        </div>
      </div>

      {/* List of properties */}
      <div>
        <div className="top text-center lg:my-14 my-8">
          <h1 className="text-md  font-bold md:text-2xl ">
            LIST OF PROPERTIES
          </h1>
          <p className="text-#808080 text-xs md:text-sm ">
            Mauris primis turpis Laoreet magna felis mi amet quam enim curae.
            Sodales semper tempor dictum faucibus habitasse.
          </p>
        </div>

        {/* Property Section */}

        <PropertySection />
      </div>
    </section>
  );
};

export default Properties;
