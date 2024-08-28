export type itemType = {
  name: string;
  action: string;
}[];

export type callBackFunctionType = (
  e: React.ChangeEvent<HTMLInputElement>,
  type: string
) => void;

export type numberConverterUseStateType = {
  binary: string;
  octal: string;
  decimal: string;
  hexadecimal: string;
};

export type cardDataType = {
  title: string;
  desc: string;
  type: string;
  value: string;
  item: itemType;
}[];

export type complementUseStateType = {
  ninesComp: string;
  tenComp: string;
  onesComp: string;
  twosComp: string;
};
