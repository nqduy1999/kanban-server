import React, { FC, ReactNode } from "react";

interface IFormLayout {
  title: string;
  subtitle?: string;
  children: React.ReactElement | ReactNode;
}
const FormLayout: FC<IFormLayout> = ({ title, subtitle, children }) => {
  return (
    <div className="pt-6 mt-28">
      <div className="flex justify-center items-center flex-col ">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-10 transition duration-300">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {subtitle}
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormLayout };
