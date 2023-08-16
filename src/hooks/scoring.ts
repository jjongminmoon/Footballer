import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { UserProps } from "../model/user";

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
