"use client";
import { binaryToDecimal } from "@/utils/binaryToDecimal";
import { binaryToHexadecimal } from "@/utils/binaryToHexadecimal";
import { binaryToOctal } from "@/utils/binaryToOctal";
import { decimalToBinary } from "@/utils/decimalToBinary";
import { decimalToHexadecimal } from "@/utils/decimalToHexadecimal";
import { decimalToOctal } from "@/utils/decimalToOctal";
import { hexadecimalToBinary } from "@/utils/hexadecimalToBinary";
import { hexaDecimalToDecimal } from "@/utils/hexaDecimalToDecimal";
import { hexaDecimalToOctal } from "@/utils/hexaDecimalToOctal";
import { octalToBinary } from "@/utils/octalToBinary";
import { octalToDecimal } from "@/utils/octalToDecimal";
import { octalToHexadecimal } from "@/utils/octalToHexadecimal";
import React, { useState } from "react";
import CardWraper from "./CardWraper";
import { callBackFunctionType, cardDataType, numberConverterUseStateType } from "@/utils/types";

const Cards = () => {
  const [values, setValues] = useState<numberConverterUseStateType>({
    binary: "",
    octal: "",
    decimal: "",
    hexadecimal: "",
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
      title: "Decimal to...",
      desc: "Convert decimal numbers to binary, octal or hexadecimal",
      type: "decimal",
      value: values.decimal,
      item: [
        {
          name: "Binary",
          action: values.decimal
            ? decimalToBinary(parseFloat(values.decimal))
                .toString()
                .slice(0, 30)
            : "NULL",
        },
        {
          name: "Octal",
          action: values.decimal
            ? decimalToOctal(parseFloat(values.decimal)).toString().slice(0, 30)
            : "NULL",
        },
        {
          name: "HexaDecimal",
          action: values.decimal
            ? decimalToHexadecimal(parseFloat(values.decimal))
                .toString()
                .slice(0, 30)
            : "NULL",
        },
      ],
    },
    {
      title: "Binary to...",
      desc: "Convert binary numbers to decimal, octal or hexadecimal",
      type: "binary",
      value: values.binary,
      item: [
        {
          name: "Octal",
          action: values.binary
            ? binaryToOctal(parseFloat(values.binary)).toString().slice(0, 30)
            : "NULL",
        },
        {
          name: "Decimal",
          action: values.binary
            ? binaryToDecimal(parseFloat(values.binary)).toString().slice(0, 30)
            : "NULL",
        },
        {
          name: "Hexadecimal",
          action: values.binary
            ? binaryToHexadecimal(parseFloat(values.binary))
                .toString()
                .slice(0, 30)
            : "NULL",
        },
      ],
    },
    {
      title: "Octal to...",
      desc: "Convert octal numbers to binary, decimal or hexadecimal",
      type: "octal",
      value: values.octal,
      item: [
        {
          name: "Binary",
          action: values.octal
            ? octalToBinary(parseFloat(values.octal)).toString().slice(0, 30)
            : "NULL",
        },
        {
          name: "Decimal",
          action: values.octal
            ? octalToDecimal(parseFloat(values.octal)).toString().slice(0, 30)
            : "NULL",
        },
        {
          name: "Hexadecimal",
          action: values.octal
            ? octalToHexadecimal(parseFloat(values.octal))
                .toString()
                .slice(0, 30)
            : "NULL",
        },
      ],
    },
    {
      title: "Hexadecimal to...",
      desc: "Convert hexadecimal numbers to binary, octal or decimal",
      type: "hexadecimal",
      value: values.hexadecimal,
      item: [
        {
          name: "Binary",
          action: values.hexadecimal
            ? hexadecimalToBinary(values.hexadecimal).toString().slice(0, 30)
            : "NULL",
        },
        {
          name: "Octal",
          action: values.hexadecimal
            ? hexaDecimalToOctal(values.hexadecimal).toString().slice(0, 30)
            : "NULL",
        },
        {
          name: "Decimal",
          action: values.hexadecimal
            ? hexaDecimalToDecimal(values.hexadecimal).toString().slice(0, 30)
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

export default Cards;