import React, { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { LoginFormProvider } from "./login-form.provider";
import { confirmPasswordValidationSchema, passwordValidationSchema, usernameValidationSchema } from "./login-form.schema";

const validationSchema = Yup.object({
  username: usernameValidationSchema,
  password: passwordValidationSchema,
  confirmPassword: confirmPasswordValidationSchema
});

interface ILoginForm {
    onSubmit: any,
    isLoading: boolean
}

export const LoginForm: FC<ILoginForm> = ({ onSubmit, isLoading }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <LoginFormProvider>
        </LoginFormProvider>
      </Form>
    </Formik>
  );
};
