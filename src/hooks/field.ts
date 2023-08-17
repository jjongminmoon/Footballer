import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../service/firebase";

export function getAllField() {
  const [allField, setAllField] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "field"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setAllField(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { allField };
}
