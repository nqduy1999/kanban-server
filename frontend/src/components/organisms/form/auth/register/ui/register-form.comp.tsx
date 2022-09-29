import React, { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { RegisterFormProvider } from "./register-form.provider";
import { LoadingButton } from "@/components/molecules";
import { RegisterFormContent } from "./register-form.content";
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
        <RegisterFormProvider>
          <RegisterFormContent />
          <LoadingButton
            className="mt-4 w-full text-white bg-primary-700 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
        </RegisterFormProvider>
      </Form>
    </Formik>
  );
};
