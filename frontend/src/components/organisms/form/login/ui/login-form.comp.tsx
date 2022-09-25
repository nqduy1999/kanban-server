import React, { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { LoginFormProvider } from "./login-form.provider";
import {
  confirmPasswordValidationSchema,
  passwordValidationSchema,
  usernameValidationSchema,
} from "./login-form.schema";

import { LoadingButton } from "@/components/molecules";

const validationSchema = Yup.object({
  username: usernameValidationSchema,
  password: passwordValidationSchema,
  confirmPassword: confirmPasswordValidationSchema,
});

interface ILoginForm {
  onSubmit: any;
  isLoading: boolean;
}

export const LoginForm: FC<ILoginForm> = ({ onSubmit, isLoading }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <LoginFormProvider>
          <LoadingButton
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            loading={isLoading}
          >
            Login
          </LoadingButton>
        </LoginFormProvider>
      </Form>
    </Formik>
  );
};
