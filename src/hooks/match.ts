import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { useEffect, useState } from "react";

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
