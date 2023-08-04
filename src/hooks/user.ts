import { addDoc, collection, getCountFromServer, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { useEffect, useState } from "react";

export default async function addUser(
  email: string,
  age: number,
  name: string,
  position: [],
  region: string,
  level: string
) {
  const coll = collection(dbService, "user");
  const snapshot = await getCountFromServer(coll);

  await addDoc(coll, {
    number: snapshot.data().count + 1,
    email: email,
    image: null,
    name: name,
    age: age,
    position: position,
    region: region,
    level: level,
    team: null,
    manner: [],
    goodPlayer: [],
    apply: [],
    posts: []
  });

  return;
}

export function getAllUser() {
  const [allUser, setAllUser] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "user"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setAllUser(arr);
    });
    return () => {
      unsubscribe();
    };
  });

  return { allUser };
}
