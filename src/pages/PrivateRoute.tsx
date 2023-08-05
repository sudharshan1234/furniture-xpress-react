import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth0();

  return user ? <>{children}</> : <Navigate to={"/"} />;
};

export default PrivateRoute;
