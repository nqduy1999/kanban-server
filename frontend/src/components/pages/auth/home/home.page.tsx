import { Meta } from "@/components/organisms";
import { AuthLayout } from "@/components/templates";

const meta = {
  title: "Next.js Boilerplate Presentation",
  description:
    "Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.",
};

const HomePage = () => (
  <AuthLayout meta={<Meta {...meta} />}>Home Page</AuthLayout>
);

export { HomePage };
