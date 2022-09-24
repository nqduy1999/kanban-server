import { Meta } from "@/components/organisms";
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
    if (!isAuthencated) {
      router.push("/login");
    }
  }, [isAuthencated]);

  return (
    <div>
      <Meta title={props.meta.title} description={props.meta.description} />
      {props.children}
    </div>
  );
};

export { AuthLayout };
