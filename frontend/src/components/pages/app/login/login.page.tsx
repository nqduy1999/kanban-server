import { LoginForm } from "@/components/organisms/form";
import { BaseLayout, FormLayout } from "@/components/templates";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { locale } = useRouter();

  console.log(locale, "locale");

  const onSubmit = () => {
    setIsLoading(!isLoading);
  };

  return (
    <BaseLayout>
      <FormLayout title="Login" subtitle="Input username and password to login">
        <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
      </FormLayout>
    </BaseLayout>
  );
};

export { LoginPage };
