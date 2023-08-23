import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { UserProps } from "../model/user";
import { TeamProps } from "../model/team";

export const handleScoring = (
  title: string,
  collection: string,
  dataId: string,
  userData: UserProps,
  score: number
) => {
  const docRef = doc(dbService, collection, dataId);
  (title === "실력"
    ? updateDoc(docRef, {
        goodPlayer: arrayUnion({
          id: userData?.id,
          name: userData?.name,
          score: score
        })
      })
    : updateDoc(docRef, {
        manner: arrayUnion({
          id: userData?.id,
          name: userData?.name,
          score: score
        })
      })
  ).then(() => {
    alert("저장되었습니다.");
  });
};

export const getPlayerLevelScore = (data: UserProps) => {
  const levelScore =
    data?.goodPlayer.length > 0
      ? (
          data?.goodPlayer.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          data?.goodPlayer.length
        ).toFixed(1)
      : "평가 없음";

  return levelScore;
};

export const getPlayerMannerScore = (data: UserProps) => {
  const mannerScore =
    data?.manner.length > 0
      ? (
          data?.manner.map(({ score }) => score).reduce((a, b) => a + b, 0) / data?.manner.length
        ).toFixed(1)
      : "평가 없음";
  return mannerScore;
};

export const getTeamLevelScore = (data: TeamProps) => {
  const levelScore =
    data?.goodTeam.length > 0
      ? (
          data?.goodTeam.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          data?.goodTeam.length
        ).toFixed(1)
      : "평가 없음";

  return levelScore;
};

export const getTeamMannerScore = (data: TeamProps) => {
  const mannerScore =
    data?.manner.length > 0
      ? (
          data?.manner.map(({ score }) => score).reduce((a, b) => a + b, 0) / data?.manner.length
        ).toFixed(1)
      : "평가 없음";

  return mannerScore;
};
