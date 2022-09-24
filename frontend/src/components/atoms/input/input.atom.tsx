import React, { FC } from "react";

interface IInput {
  className: string;
  type?: string;
  placeholder: string;
  onChange?: any;
}

const Input: FC<IInput> = ({ className, type, placeholder, onChange, ...rest }) => {
  return (
    <input
      className={className}
      aria-label={type}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

Input.defaultProps = {
  className:
    "border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500",
  type: 'text'
};
export { Input };
