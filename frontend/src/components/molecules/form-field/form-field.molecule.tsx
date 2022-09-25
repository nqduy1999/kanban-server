import { IInput } from "@/components/atoms";
import { FormInput } from "@/components/molecules";
import { useField } from "formik";
import React, { FC } from "react";

interface IFieldForm extends IInput {
  label: string;
  classLabel?: string;
  type: "text" | "input" | "password";
}

export const FormField: FC<IFieldForm> = ({
  type,
  name,
  classLabel,
  ...rest
}) => {
  const [field, meta] = useField({ name, type });

  return (
    <FormInput
      meta={meta}
      name={field.name}
      value={field.value}
      className={`leading-none w-full text-gray-900 dark:text-gray-50 p-3 focus:outline-none ${
        meta.touched && meta.error
          ? "border-rose-500"
          : "border-gray-400 dark:border-gray-600"
      } mt-2 border-2 dark:bg-gray-600 rounded-lg bg-white`}
      onChange={field.onChange}
      type={type}
      {...rest}
    />
  );
};

FormField.defaultProps = {
  type: "text",
};
