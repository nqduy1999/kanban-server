const Navbar = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-10 m-[2px] md:left-auto">
      <div className="bg-black bg-opacity-10 backdrop-blur backdrop-filter md:bg-opacity-0  flex items-stretch justify-end rounded-t-[10px] px-2 py-1 md:m-1 md:rounded-lg">
        <button className="bg-white bg-opacity-0  hover:bg-opacity-10 mr-1 flex rounded-md px-3 py-2 text-xs font-medium text-white  focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 ">
          Preview
        </button>
        <button className="bg-white bg-opacity-[0.15] flex rounded-md px-3 py-2 text-xs font-medium text-white   focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">
          Code
        </button>
        <div className="my-2 mx-1 w-[2px] grow-0 bg-white bg-opacity-10"></div>
        <button className="bg-white bg-opacity-0 hover:bg-opacity-10 relative rounded-md px-4 py-2 text-xs font-medium text-white  focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">
          <span className="">Copy</span>
          <span className="opacity-0 absolute inset-0 flex items-center justify-center">
            Copied!
          </span>
        </button>
      </div>
    </div>
  );
};
export { Navbar };
