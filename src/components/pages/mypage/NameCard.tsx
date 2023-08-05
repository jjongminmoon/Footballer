import styled from "@emotion/styled";
import { getAllUser, getUser } from "../../../hooks/user";
import { UserProps } from "../../../model/user";
import { useState } from "react";
import { dbService } from "../../../service/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function NameCard() {
  const { userData } = getUser();
  const { allUser } = getAllUser();
  const [rename, setRename] = useState("");

  const changeName = () => {
    if (allUser.map((user: UserProps) => user.name).includes(rename)) {
      alert("사용하고 있는 선수가 있습니다. 다른 닉네임을 사용해주세요.");
      return;
    } else {
      const docRef = doc(dbService, "user", userData.id);
      updateDoc(docRef, {
        name: rename
      })
        .then(() => {
          alert("이름(닉네임)을 변경했습니다.");
          setRename("");
        })
        .catch((e) => alert(e));
    }
  };

  return (
    <Container>
      <Image>
        <img src={userData?.image} alt="유저 대표 이미지" />
      </Image>
      <p>{userData?.name}</p>
      <ChangeInput>
        <input
          type="text"
          placeholder="변경할 이름(닉네임)"
          value={rename}
          onChange={(e) => setRename(e.target.value)}
        />
        <Button onClick={changeName}>변경</Button>
      </ChangeInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 150px;
  border: 1px solid var(--main-gray);
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 30px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 999px;
  }
`;

const ChangeInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  margin-right: 30px;

  input {
    height: 35px;
    padding: 3px 10px 0 10px;
    border: 1px solid var(--main-gray);
    border-radius: 8px;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 35px;
  padding-top: 3px;
  border: none;
  border-radius: 8px;
  background-color: var(--main-button);
  color: white;
`;
