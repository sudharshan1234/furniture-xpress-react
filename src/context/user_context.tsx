import { FC, useContext, useEffect, useState } from "react";
import {
  AppState,
  LogoutOptions,
  RedirectLoginOptions,
  User,
  useAuth0,
} from "@auth0/auth0-react";
import React from "react";

const UserContext = React.createContext<{
  loginWithRedirect: (
    options?: RedirectLoginOptions<AppState> | undefined,
  ) => Promise<void>;
  logout: (options?: LogoutOptions | undefined) => void;
  myUser: User | undefined;
}>({
  loginWithRedirect: () => {
    return new Promise<void>(() => {});
  },
  logout: () => {},
  myUser: undefined,
});
export const UserProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    setMyUser(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
