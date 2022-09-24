import React, { FC, ReactElement } from "react";

interface IButton {
    className: string,
    ariaLabel?: string,
    children: React.ReactNode | ReactElement,
    onClick?: any
}

const Button: FC<IButton> = ({className, ariaLabel, onClick, children, ...rest}) => {
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

export {Button};

