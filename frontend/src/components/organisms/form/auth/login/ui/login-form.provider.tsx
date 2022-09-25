import React, { FC, ReactElement, ReactNode } from "react";

export const LoginFormContext: any = React.createContext({
  getSubmitValues: () => ({}),
});

interface ILoginFormProvider {
  isLoading?: boolean;
  children?: ReactElement | ReactNode;
}

export const LoginFormProvider: FC<ILoginFormProvider> = ({
  isLoading,
  children,
}) => {
  return (
    <LoginFormContext.Provider
      value={{
        isLoading,
      }}
    >
      {children}
    </LoginFormContext.Provider>
  );
};
