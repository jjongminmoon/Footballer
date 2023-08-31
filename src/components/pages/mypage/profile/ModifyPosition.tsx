import styled from "@emotion/styled";
import ModifyWindow from "./ModifyWindow";
import { SetStateAction, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";
import { getUser } from "../../../../hooks/user";
import { positionList } from "../../register/registerData";

type Props = {
  setOpenModifyPosition: React.Dispatch<SetStateAction<boolean>>;
};

export default function ModifyPosition({ setOpenModifyPosition }: Props) {
  const { userData } = getUser();
  const [openSelect, setOpenSelect] = useState(false);
  const [position, setPosition] = useState("");

  const changeRegion = () => {
    const docRef = doc(dbService, "user", userData.id);
    updateDoc(docRef, {
      position: position
    })
      .then(() => {
        alert("포지션을 변경했습니다.");
        setOpenModifyPosition(false);
      })
      .catch((e) => alert(e));
  };

  return (
    <ModifyWindow>
      <h1>포지션 변경</h1>
      <InputBox>
        <Input type="text" value={position} onClick={() => setOpenSelect(true)} readOnly />
        {openSelect && (
          <Select>
            {positionList.map(({ name }) => (
              <Position
                key={name}
                onClick={() => {
                  setPosition(name);
                  setOpenSelect(false);
                }}
              >
                {name}
              </Position>
            ))}
          </Select>
        )}
      </InputBox>
      <ButtonBox>
        <Button onClick={changeRegion}>저장</Button>
        <Button onClick={() => setOpenModifyPosition(false)}>취소</Button>
      </ButtonBox>
    </ModifyWindow>
  );
}

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 2px solid var(--main-gray);
  border-radius: 8px;
  padding: 0 10px;
`;

const Select = styled.div`
  position: absolute;
  top: 37px;
  left: 0;
  width: 300px;
  height: 135px;
  padding: 8px;
  font-size: 14px;
  background-color: white;
  border: 1px solid var(--main-gray);
`;

const Position = styled.p`
  padding: 2px 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--main-light-gray);
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background-color: var(--main-button);
  color: white;
`;
