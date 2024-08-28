import React from "react";
import TitleDesc from "./TitleDesc";

const HeroSection = () => {
  return (
    <section className="max-w-7xl w-full mx-auto max-lg:max-w-2xl max-md:px-5">
      <TitleDesc
        desc="Our Number conversion tool make it simple to convert between decimal,
          binary, octal, and hexadecimal. Get instant results with just a few
          clicks."
        title="Convert Between Numbers Systems"
      />
    </section>
  );
};

export default HeroSection;
