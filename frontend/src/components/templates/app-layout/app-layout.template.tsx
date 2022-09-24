import { Navbar } from "@/components/organisms";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const BaseLayout = (props: ILayoutProps) => {
  const router = useRouter();
  const isAuthencated = () => {
    return false;
  };

  useEffect(() => {
    if (isAuthencated()) {
      router.push("/");
    }
  }, [isAuthencated]);

  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export { BaseLayout };
