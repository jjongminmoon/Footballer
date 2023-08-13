import { addDoc, collection, getCountFromServer, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { AuthContext } from "../context/AuthProvider";
import { UserProps } from "../model/user";

export default async function addUser(
  email: string | null | undefined,
  image: string[],
  birth: string,
  name: string,
  position: string,
  region: string,
  level: string
) {
  const coll = collection(dbService, "user");
  const snapshot = await getCountFromServer(coll);

  await addDoc(coll, {
    number: snapshot.data().count + 1,
    email: email,
    image: image,
    name: name,
    birth: birth,
    position: position,
    region: region,
    level: level,
    status: [],
    team: "무소속",
    manner: [],
    goodPlayer: [],
    apply: [],
    scouted: []
  });
}

export function getAuthData() {
  const authData = useContext(AuthContext);

  return { authData };
}

export function getUser() {
  const userData = useContext<UserProps>(UserContext);

  return { userData };
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
