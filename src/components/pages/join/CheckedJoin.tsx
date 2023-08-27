import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";

type Props = {
  checked: boolean;
  checked2: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  setChecked2: Dispatch<SetStateAction<boolean>>;
};

export default function CheckedJoin({ checked, checked2, setChecked, setChecked2 }: Props) {
  return (
    <Container>
      <Item>
        <input type="checkbox" onClick={() => setChecked(!checked)} />
        <span>{"[필수]"}</span>
        <p>{"만 14세 이상입니다."}</p>
      </Item>
      <Item>
        <input type="checkbox" onClick={() => setChecked2(!checked2)} />
        <span>{"[필수]"}</span>
        <p>마우트 이용약관 및 개인정보 수집 및 이용에 동의합니다.</p>
      </Item>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;

  span {
    margin-right: 5px;
  }
`;
