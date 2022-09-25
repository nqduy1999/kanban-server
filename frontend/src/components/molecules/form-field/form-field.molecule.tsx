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
      onChange={field.onChange}
      type={type}
      {...rest}
    />
  );
};

FormField.defaultProps = {
  type: "text",
};
