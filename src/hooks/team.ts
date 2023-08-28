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
    region: region,
    fee: fee,
    introduce: introduce,
    member: [userData?.id],
    status: status,
    applicationList: [],
    scoutList: [],
    goodTeam: [],
    manner: [],
    footballerCup: [],
    history: ["팀 등록을 완료 했습니다. 풋볼러들을 모집해보세요."]
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

export function getMatchTeam(teamId: string) {
  const [matchTeam, setMatchTeam] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "team", teamId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setMatchTeam(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return { matchTeam };
}
