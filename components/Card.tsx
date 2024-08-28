import { callBackFunctionType, itemType } from "@/utils/types";
import React from "react";

type dataProps = {
  title: string;
  desc: string;
  type: string;
  value: string;
  callBackFunction: callBackFunctionType
  item: itemType
};

const Card = ({
  callBackFunction,
  desc,
  item,
  title,
  type,
  value,
  ...props
}: dataProps) => {
  return (
    <div
      className="flex flex-col gap-5 justify-center items-center p-5 bg-white rounded"
      {...props}
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-bold text-2xl max-md:text-xl">{title}</h2>
        <p className="text-center text-gray-500 ">{desc}</p>
        <input
          type="text"
          placeholder={`Enter ${type} number`}
          className="border px-3 rounded"
          value={value}
          onChange={(e) => callBackFunction(e, type)}
        />
      </div>
      <div className="flex flex-col self-start gap-3">
        <h3 className="font-semibold text-xl">Result:</h3>
        <div className="flex flex-col gap-3">
          {item.map((result, index) => (
            <p key={index} className="flex flex-col">
              <span>{result.name}:</span>
              <span>{result.action}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
