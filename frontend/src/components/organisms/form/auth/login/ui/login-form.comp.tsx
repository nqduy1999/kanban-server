import React, { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { LoginFormProvider } from "./login-form.provider";
import { LoadingButton } from "@/components/molecules";
import { LoginFormContent } from "./login-form.content";
import {
  passwordValidationSchema,
  usernameValidationSchema,
} from "../../schema/auth.schema";

const validationSchema = Yup.object({
  username: usernameValidationSchema,
  password: passwordValidationSchema,
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
          <LoginFormContent />
          <LoadingButton
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center mt-5"
            loading={isLoading}
            type="submit"
          >
            Login
          </LoadingButton>
        </LoginFormProvider>
      </Form>
    </Formik>
  );
};
