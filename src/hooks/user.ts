import { addDoc, collection, getCountFromServer, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { AuthContext } from "../context/AuthProvider";
import { UserProps } from "../model/user";

export default async function addUser(
  email: string | null | undefined,
  image: string,
  name: string,
  height: string,
  weight: string,
  birth: string,
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
    height: height,
    weight: weight,
    birth: birth,
    position: position,
    region: region,
    level: level,
    team: ["무소속"],
    levelScore: [],
    mannerScore: [],
    apply: [],
    scouted: [],
    review: [],
    history: ["선수 등록이 완료되었습니다."]
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
  }, []);

  return { allUser };
}
