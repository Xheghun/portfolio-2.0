import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};
const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={`col-span-8 row-span-2 flex-col items-start`}>
          <h2 className="text-2xl w-full text-left capitalize">
            Pioneer of Performance
          </h2>
          <p className="font-light">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum
          </p>
        </ItemLayout>

        <ItemLayout className={`col-span-4 text-accent`}>
          <p className="font-semibold w-full text-left text-5xl">
            25+<sub className="font-semibold text-base">Clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={`col-span-4 text-accent`}>
        <p className="font-semibold w-full text-left text-5xl">
            25+<sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
