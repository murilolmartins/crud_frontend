import { ReactNode } from "react";
import { UserProvider } from "./user";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <UserProvider>{children}</UserProvider>;
};
