import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <section className="min-h-screen grid place-items-center">
        <h1>Loading...</h1>
      </section>
    );
  }
  if (error) {
    return (
      <section className="min-h-screen grid place-items-center">
        <h1>{error.message}</h1>
      </section>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
