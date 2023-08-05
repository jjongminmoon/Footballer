import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  birth: string;
  setBirth: React.Dispatch<SetStateAction<string>>;
};

export default function BirthInput({ birth, setBirth }: Props) {
  return (
    <div>
      <h3>생년월일</h3>
      <Input
        type="date"
        value={birth}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBirth(e.target.value)}
      />
    </div>
  );
}

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 2px solid var(--main-gray);
  border-radius: 8px;
  padding: 0 10px;
`;
