import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const BaseLayout = (props: IMainProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {props.meta}
      {props.children}
    </div>
  );
};

export { BaseLayout };
