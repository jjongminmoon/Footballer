import { User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase";

export const AuthContext = createContext<User | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const join = auth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });
    return join;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
