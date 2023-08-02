import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../../../service/firebase";

export default function MainPage() {
  const [fieldData, setFieldData] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "field"));
    const unsubscribe = onSnapshot(q, (querysnapshot) => {
      const arr = querysnapshot.docs.map((doc) => {
        return {
          name: doc.id,
          ...doc.data()
        };
      });

      setFieldData(arr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(fieldData);

  return (
    <>
      <Carousel />
    </>
  );
}
