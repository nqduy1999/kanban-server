import { Header, Meta } from "@/components/organisms";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

type ILayoutProps = {
  meta:
    | {
        title: string;
        description: string;
      }
    | any;
  children: ReactNode;
};

const AuthLayout = (props: ILayoutProps) => {
  const router = useRouter();

  const isAuthencated = () => {
    return true;
  };

  useEffect(() => {
    if (!isAuthencated()) {
      router.push("/login");
    }
  }, [isAuthencated]);

  return (
    <div className="bg-gradient-to-r from-cyan-200 to-cyan-400 h-screen dark:bg-gradient-to-b from-gray-900 dark:via-purple-900 dark:to-violet-600">
      <Meta title={props.meta.title} description={props.meta.description} />
      <Header />
      {props.children}
    </div>
  );
};

export { AuthLayout };
