import { image } from "@/commons/images";
import React, { FC, ReactNode } from "react";

interface IFormLayout {
  title: string;
  subtitle?: string;
  children: React.ReactElement | ReactNode;
}
const FormLayout: FC<IFormLayout> = ({ title, children }) => {
  return (
    <div className="pt-6 mt-20">
      <div className="flex justify-center items-center">
        <img
          className="lg:block hidden w-[28rem] object-cover h-[26.6875rem] rounded-l-lg border border-white dark:border-gray-800"
          src={image.background}
          alt=""
        />
        <div className="w-full bg-white rounded-lg lg:rounded-l-none sm:m-0 m-4 shadow md:mt-0 max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormLayout };
