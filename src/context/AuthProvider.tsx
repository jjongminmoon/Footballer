import React, { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../service/firebase";

type Props = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<User | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const join = auth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });
    return join;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
