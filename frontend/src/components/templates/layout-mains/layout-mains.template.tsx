import type { ReactNode } from "react";

export type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const LayoutMain = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.children}
  </div>
);

export { LayoutMain };
