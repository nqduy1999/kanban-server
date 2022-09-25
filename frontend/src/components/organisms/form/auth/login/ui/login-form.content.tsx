import { FormField } from "@/components/molecules";
import React from "react";

export const LoginFormContent = () => {
  return (
    <>
      <FormField
        label="Username"
        name="username"
        id="username"
        placeholder="Input username"
        type="text"
      />
      <div className="mt-4" />
      <FormField
        label="Password"
        name="password"
        id="password"
        placeholder="Input password"
        type="password"
      />
    </>
  );
};
