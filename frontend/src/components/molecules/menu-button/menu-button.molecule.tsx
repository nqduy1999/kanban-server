import { Button, IButton } from "@/components/atoms";
import { FC } from "react";

interface IMenuButton extends IButton {}

const MenuButton: FC<IMenuButton> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
export { MenuButton };
