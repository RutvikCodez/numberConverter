import React from "react";
import Card from "./Card";
import { callBackFunctionType, cardDataType } from "@/utils/types";

type dataProps = {
  data: cardDataType;
  callBackFunction: callBackFunctionType;
};

const CardWraper = ({ data, callBackFunction, ...props }: dataProps) => {
  return (
    <div
      className="max-w-[90vw] mx-auto w-full grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-xl:max-w-4xl max-lg:grid-cols-2 max-lg:max-w-2xl max-md:px-5 max-md:grid-cols-1"
      {...props}
    >
      {data.map((item, index) => (
        <Card
          callBackFunction={callBackFunction}
          desc={item.desc}
          item={item.item}
          title={item.title}
          type={item.type}
          value={item.value}
          key={index}
        />
      ))}
    </div>
  );
};

export default CardWraper;
