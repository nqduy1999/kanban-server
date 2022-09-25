import { IInput, Input } from "@/components/atoms";
import { FieldMetaProps } from "formik";
import { FC, useState } from "react";

export interface IFormInput extends IInput {
  meta: FieldMetaProps<any>;
  label: string;
  classLabel?: string;
  wrapperClassName?: string;
}

const FormInput: FC<IFormInput> = ({
  label,
  classLabel,
  meta,
  id,
  type,
  wrapperClassName,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  
  return (
    <div className={`w-full flex flex-col ${wrapperClassName ?? ""}`}>
      {label && (
        <label className={classLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <Input id={id} {...rest} />
      {type === 'password' && <></> }
      {meta.touched && meta.error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {meta.error}
        </span>
      )}
    </div>
  );
};

FormInput.defaultProps = {
  classLabel:
    "font-semibold text-sm leading-none text-gray-900 dark:text-white ",
  className:
    "leading-none text-gray-900 dark:text-gray-50 p-3 focus:outline-none border-gray-400	 dark:border-gray-600 mt-2 border-2 dark:bg-gray-600 rounded bg-white",
};
export { FormInput };
