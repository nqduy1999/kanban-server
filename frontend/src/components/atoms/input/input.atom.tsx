import React, { FC } from "react";

export interface IInput {
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  name?: string | any;
  id?: string;
  disabled?: boolean;
  value?: string | number;
}

const Input: FC<IInput> = ({ className, type, ...rest }) => {
  return (
    <>
      <input className={className} type={type} aria-label={type} {...rest} />
    </>
  );
};

Input.defaultProps = {
  className:
    "border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500",
  type: "text",
};
export { Input };
