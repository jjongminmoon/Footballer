import styled from "@emotion/styled";
import Modal from "../../ui/Modal";
import CommonTitle from "../../ui/Title";
import RegisterInput from "./RegisterInput";
import { SetStateAction, useState } from "react";
import { dbService } from "../../../service/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getAllField } from "../../../hooks/field";
import { FieldProps } from "../../../model/field";
import { getMyTeam } from "../../../hooks/team";

type Props = {
  dateArr: string[];
  setOpenRegister: React.Dispatch<SetStateAction<boolean>>;
};

export default function RegisterMatch({ dateArr, setOpenRegister }: Props) {
  const { teamData } = getMyTeam();
  const { allField } = getAllField();
  const [date, setDate] = useState("");
  const [field, setField] = useState("");
  const [rule, setRule] = useState("");

  const handleRegisterMatch = async () => {
    if (confirm("매치를 등록하시겠습니까?")) {
      const coll = collection(dbService, "match");

      await addDoc(coll, {
        date: date,
        field: allField.find((data: FieldProps) => data.id === field),
        rule: rule,
        participation: [teamData]
      });
      setOpenRegister(false);
      alert("매치가 등록되었습니다.");
    } else {
      return;
    }
  };

  return (
    <Modal>
      <Container>
        <Wrapper>
          <CommonTitle>매치 등록</CommonTitle>
          <RegisterInput
            date={date}
            field={field}
            rule={rule}
            setDate={setDate}
            setField={setField}
            setRule={setRule}
            dateArr={dateArr}
          />
          <ButtonBox>
            <Button onClick={handleRegisterMatch}>매치 등록</Button>
            <Button onClick={() => setOpenRegister(false)}>취소</Button>
          </ButtonBox>
        </Wrapper>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: parent;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 400px;
  padding: 20px;
  background-color: white;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid var(--main-gray);
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;

  &:hover {
    background-color: var(--main-red);
  }
`;
