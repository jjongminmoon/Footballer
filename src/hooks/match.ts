import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { FieldProps } from "../model/field";
import { useEffect, useState } from "react";

export default async function registerMatch(date: string, fieldData: FieldProps[]) {
  const coll = collection(dbService, "match");

  await addDoc(coll, {
    date: date,
    matches: fieldData
  });
}

export function getMatches(selectedDate: string) {
  const [matchData, setMatchData] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "match"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setMatchData(arr.find((data: any) => data.date === selectedDate));
    });
    return () => {
      unsubscribe();
    };
  }, [selectedDate]);

  return { matchData };
}
