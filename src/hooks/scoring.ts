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
        levelScore: arrayUnion({
          id: userData?.id,
          name: userData?.name,
          score: score
        })
      })
    : updateDoc(docRef, {
        mannerScore: arrayUnion({
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
    data?.levelScore.length > 0
      ? (
          data?.levelScore.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          data?.levelScore.length
        ).toFixed(1)
      : "평가 없음";

  return levelScore;
};

export const getPlayerMannerScore = (data: UserProps) => {
  const mannerScore =
    data?.mannerScore.length > 0
      ? (
          data?.mannerScore.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          data?.mannerScore.length
        ).toFixed(1)
      : "평가 없음";
  return mannerScore;
};

export const getTeamLevelScore = (data: TeamProps) => {
  const levelScore =
    data?.levelScore.length > 0
      ? (
          data?.levelScore.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          data?.levelScore.length
        ).toFixed(1)
      : "평가 없음";

  return levelScore;
};

export const getTeamMannerScore = (data: TeamProps) => {
  const mannerScore =
    data?.mannerScore.length > 0
      ? (
          data?.mannerScore.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          data?.mannerScore.length
        ).toFixed(1)
      : "평가 없음";

  return mannerScore;
};
