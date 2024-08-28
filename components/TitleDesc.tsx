import React from "react";

type propsData = {
  title: string;
  desc: string;
};

const TitleDesc = ({ desc, title, ...props }: propsData) => {
  return (
    <div className="flex flex-col gap-3 max-w-4xl max-xl:mx-auto" {...props}>
      <h1 className="font-bold text-4xl max-lg:text-3xl max-md:text-2xl">
        {title}
      </h1>
      <p className="md:text-lg text-gray-500 ">{desc}</p>
    </div>
  );
};

export default TitleDesc;
