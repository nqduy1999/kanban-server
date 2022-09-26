import React, { FC, ReactElement } from "react";

export interface IButton {
  className: string;
  ariaLabel?: string;
  children: React.ReactNode | ReactElement;
  onClick?: any;
  type?: "button" | "submit";
  id?: string;
}

const Button: FC<IButton> = ({
  className,
  ariaLabel,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};
export { Button };
