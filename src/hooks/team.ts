import { addDoc, collection, getCountFromServer, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { useContext, useEffect, useState } from "react";
import { TeamProps } from "../model/team";
import { TeamContext } from "../context/TeamProvider";
import { UserProps } from "../model/user";

export default async function addTeam(
  logo: string,
  owner: Object,
  name: string,
  region: string,
  status: boolean,
  fee: number,
  introduce: string,
  userData: UserProps
) {
  const coll = collection(dbService, "team");
  const snapshot = await getCountFromServer(coll);

  await addDoc(coll, {
    number: snapshot.data().count + 1,
    logo: logo,
    owner: owner,
    name: name,
    introduce: introduce,
    fee: fee,
    member: [userData],
    status: status,
    applicationList: [],
    scoutList: [],
    region: region,
    goodTeam: [],
    manner: [],
    footballerCup: []
  });
}

export function getMyTeam() {
  const teamData = useContext<TeamProps>(TeamContext);

  return { teamData };
}

export function getAllTeam() {
  const [allTeam, setAllTeam] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "team"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setAllTeam(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { allTeam };
}
