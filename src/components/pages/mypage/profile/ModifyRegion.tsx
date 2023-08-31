import styled from "@emotion/styled";
import ModifyWindow from "./ModifyWindow";
import { SetStateAction, useState } from "react";
import { getUser } from "../../../../hooks/user";
import { dbService } from "../../../../service/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { regionList } from "../../register/registerData";

type Props = {
  setOpenModifyRegion: React.Dispatch<SetStateAction<boolean>>;
};

export default function ModifyRegion({ setOpenModifyRegion }: Props) {
  const { userData } = getUser();
  const [openSelect, setOpenSelect] = useState(false);
  const [region, setRegion] = useState("");

  const changeRegion = () => {
    const docRef = doc(dbService, "user", userData.id);
    updateDoc(docRef, {
      region: region
    })
      .then(() => {
        alert("지역을 변경했습니다.");
        setOpenModifyRegion(false);
      })
      .catch((e) => alert(e));
  };

  return (
    <ModifyWindow>
      <h1>지역 변경</h1>
      <InputBox>
        <Input type="text" value={region} onClick={() => setOpenSelect(true)} readOnly />
        {openSelect && (
          <Select>
            {regionList.map(({ name, value }) => (
              <Region
                key={value}
                onClick={() => {
                  setRegion(name);
                  setOpenSelect(false);
                }}
              >
                {name}
              </Region>
            ))}
          </Select>
        )}
      </InputBox>
      <ButtonBox>
        <Button onClick={changeRegion}>저장</Button>
        <Button onClick={() => setOpenModifyRegion(false)}>취소</Button>
      </ButtonBox>
    </ModifyWindow>
  );
}

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  text-align: center;
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
  height: 150px;
  padding: 8px;
  font-size: 14px;
  background-color: white;
  border: 1px solid var(--main-gray);
  overflow-y: scroll;
`;

const Region = styled.p`
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
