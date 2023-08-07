import { useEffect, useState } from "react";
import { getUser } from "../hooks/user";
import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TeamContext = React.createContext<any | null>(null);

export const TeamProvider = ({ children }: Props) => {
  const { userData } = getUser();
  const [teamData, setTeamData] = useState<any>();

  useEffect(() => {
    const q = query(collection(dbService, "team"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setTeamData(arr.find((data: any) => data.name === userData.team));
    });
    return () => {
      unsubscribe();
    };
  }, [userData]);

  return <TeamContext.Provider value={teamData}>{children}</TeamContext.Provider>;
};
