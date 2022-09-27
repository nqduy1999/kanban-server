import { Header } from "@/components/organisms";
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
    <div className="bg-gradient-to-r from-cyan-200 to-cyan-400 h-screen dark:bg-gradient-to-b from-gray-900 dark:via-purple-900 dark:to-violet-600">
      <Header />
      {props.children}
    </div>
  );
};

export { BaseLayout };
