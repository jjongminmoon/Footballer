import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";

type Props = {
  children: React.ReactNode;
};

export const UserContext = React.createContext<any | null>(null);

export const UserProvider = ({ children }: Props) => {
  const authData = useContext(AuthContext);
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const q = query(collection(dbService, "user"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setUserData(arr.find((data: any) => data.email === authData?.email));
    });
    return () => {
      unsubscribe();
    };
  }, [authData]);

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
