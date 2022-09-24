import { ThemeToggler } from "@/components/atoms";

const Navbar = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-10 m-[2px] md:left-auto">
      <div className="bg-black bg-opacity-10 backdrop-blur backdrop-filter md:bg-opacity-0  flex items-stretch justify-end rounded-t-[10px] px-2 py-1 md:m-1 md:rounded-lg">
        <ThemeToggler />
      </div>
    </div>
  );
};
export { Navbar };
