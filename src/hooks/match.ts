import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { useEffect, useState } from "react";
import { ParticipationProps } from "../model/match";

export default function getAllMatches() {
  const [allMatch, setAllMatch] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "match"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setAllMatch(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { allMatch };
}

export function getMyMatches(teamId: string) {
  const [myMatches, setMyMatches] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "match"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setMyMatches(
        arr
          .filter((match: any) =>
            match.participation.map((team: ParticipationProps) => team.id).includes(teamId)
          )
          .reverse()
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { myMatches };
}
