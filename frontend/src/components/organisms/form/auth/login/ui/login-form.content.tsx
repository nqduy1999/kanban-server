import { FormField, FormRemember } from "@/components/molecules";
import React from "react";

export const LoginFormContent = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <FormField
        label="Username"
        name="username"
        id="username"
        placeholder="Input username"
        type="text"
        classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <FormField
        classLabel="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        label="Password"
        name="password"
        id="password"
        placeholder="Input password"
        type="password"
      />
      <FormRemember />
    </div>
  );
};
