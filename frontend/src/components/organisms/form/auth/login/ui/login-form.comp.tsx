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
            className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            loading={isLoading}
            type="submit"
          >
            Login
          </LoadingButton>
          <p className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Register
            </a>
          </p>
        </LoginFormProvider>
      </Form>
    </Formik>
  );
};
