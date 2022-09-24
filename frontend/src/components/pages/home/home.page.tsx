import { Meta } from "@/components/organisms";
import { LayoutMain } from "@/components/templates";

const meta = {
  title: "Next.js Boilerplate Presentation",
  description:
    "Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.",
};

const HomePage = () => <LayoutMain meta={<Meta {...meta} />}>Home Page</LayoutMain>;

export { HomePage };
