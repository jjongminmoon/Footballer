import styled from "@emotion/styled";
import Modal from "../../ui/Modal";
import CommonTitle from "../../ui/Title";
import RegisterInput from "./RegisterInput";
import { useState } from "react";
import { dbService } from "../../../service/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getAllField } from "../../../hooks/field";
import { FieldProps } from "../../../model/field";
import { getMyTeam } from "../../../hooks/team";

type Props = {
  dateArr: string[];
};

export default function RegisterMatch({ dateArr }: Props) {
  const { allField } = getAllField();
  const { teamData } = getMyTeam();
  const [openRegister, setOpenRegister] = useState(false);
  const [date, setDate] = useState("");
  const [field, setField] = useState("");
  const [rule, setRule] = useState("");

  const handleRegisterMatch = async () => {
    if (teamData.name[teamData.name.length - 1] !== "무소속") {
      if (confirm("매치를 등록하시겠습니까?")) {
        const coll = collection(dbService, "match");

        await addDoc(coll, {
          date: date,
          field: allField.find((data: FieldProps) => data.id === field),
          rule: rule,
          participation: [teamData.id]
        });
        setOpenRegister(false);
        alert("매치가 등록되었습니다.");
      } else {
        return;
      }
    } else {
      alert("소속팀이 없어 매치를 등록할 수 없습니다.");
    }
  };

  return (
    <>
      <OpenSelectButton onClick={() => setOpenRegister(true)}>매치 등록</OpenSelectButton>

      {openRegister && (
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
      )}
    </>
  );
}

const OpenSelectButton = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  margin: 10px 0;
  border: 1px solid var(--main-gray);
  border-radius: 8px;
  background-color: white;
  font-weight: bold;

  :hover {
    background-color: var(--main-red);
  }
`;

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
