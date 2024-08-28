"use client";
import { complementOf1 } from "@/utils/complementOf1";
import { complementOf10 } from "@/utils/complementOf10";
import { complementOf9 } from "@/utils/complementOf9";
import React, { useState } from "react";
import { complementOf2 } from "@/utils/complementOf2";
import CardWraper from "./CardWraper";
import { callBackFunctionType, cardDataType, complementUseStateType } from "@/utils/types";

const ComplementCards = () => {
  const [values, setValues] = useState<complementUseStateType>({
    ninesComp: "",
    tenComp: "",
    onesComp: "",
    twosComp: "",
  });

  const handleChange: callBackFunctionType = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setValues({
      ...values,
      [type]: e.target.value,
    });
  };

  const data: cardDataType = [
    {
      title: "9's Complement",
      desc: "get 9's complement of a number",
      type: "ninesComp",
      value: values.ninesComp,
      item: [
        {
          name: "9's Complement:",
          action: values.ninesComp
            ? complementOf9(parseFloat(values.ninesComp)).toString().slice(0, 30)
            : "NULL",
        },
      ],
    },
    {
      title: "10's Complement",
      desc: "get 10's complement of a number",
      type: "tenComp",
      value: values.tenComp,
      item: [
        {
          name: "10's Complement:",
          action: values.tenComp
            ? complementOf10(parseFloat(values.tenComp))
                .toString()
                .slice(0, 30)
            : "NULL",
        },
      ],
    },
    {
      title: "1's Complement",
      desc: "get 1's complement of a binary number",
      type: "onesComp",
      value: values.onesComp,
      item: [
        {
          name: "1's Complement:",
          action: values.onesComp
            ? complementOf1(parseFloat(values.onesComp)).toString().slice(0, 30)
            : "NULL",
        },
      ],
    },
    {
      title: "2's Complement",
      desc: "get 2's complement of a binary number",
      type: "twosComp",
      value: values.twosComp,
      item: [
        {
          name: "2's Complement:",
          action: values.twosComp
            ? complementOf2(parseFloat(values.twosComp)).toString().slice(0, 30)
            : "NULL",
        },
      ],
    },
  ];
  return (
    <section className="bg-gray-200 py-10">
      <CardWraper callBackFunction={handleChange} data={data} />
    </section>
  );
};

export default ComplementCards;