import React, { FC, ReactElement, ReactNode } from "react";

export const RegisterFormContext: any = React.createContext({
  getSubmitValues: () => ({}),
});

interface IRegisterFormProvider {
  isLoading?: boolean;
  children?: ReactElement | ReactNode;
}

export const RegisterFormProvider: FC<IRegisterFormProvider> = ({
  isLoading,
  children,
}) => {
  return (
    <RegisterFormContext.Provider
      value={{
        isLoading,
      }}
    >
      {children}
    </RegisterFormContext.Provider>
  );
};
