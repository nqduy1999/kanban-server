import type { ReactNode } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const BaseLayout = (props: ILayoutProps) => <div>{props.children}</div>;

export { BaseLayout };
