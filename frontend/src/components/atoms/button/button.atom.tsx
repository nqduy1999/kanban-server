import React, { FC, ReactElement } from "react";

interface IButton {
    className: string,
    ariaLabel?: string,
    children: React.ReactNode | ReactElement,
    onClick?: any
}

const Button: FC<IButton> = (props) => {
  return (
    <button
      className={props.className}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export {Button};