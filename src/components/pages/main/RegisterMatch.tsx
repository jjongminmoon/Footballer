import styled from "@emotion/styled";
import Modal from "../../ui/Modal";
import CommonTitle from "../../ui/Title";
import { useState } from "react";
import RegisterInput from "./RegisterInput";

type Props = {
  dateArr: string[];
};

export default function RegisterMatch({ dateArr }: Props) {
  const [date, setDate] = useState("");
  const [field, setField] = useState("");
  const [rule, setRule] = useState("");

  const handleRegisterMatch = () => {};

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
            <Button>매치 등록</Button>
            <Button>취소</Button>
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
