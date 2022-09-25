import { LoginForm } from "@/components/organisms/form";
import { BaseLayout, FormLayout } from "@/components/templates";

const LoginPage = () => {
  return (
    <BaseLayout>
      <FormLayout title="Login" subtitle="Input username and password to login">
        <LoginForm
          isLoading={true}
          onSubmit={() => console.log("submit form")}
        />
      </FormLayout>
    </BaseLayout>
  );
};

export { LoginPage };
