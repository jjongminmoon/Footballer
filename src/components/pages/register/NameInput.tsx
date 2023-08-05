import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  name: string;
  setName: React.Dispatch<SetStateAction<string>>;
};

export default function NameInput({ name, setName }: Props) {
  return (
    <div>
      <h3>이름(닉네임)</h3>
      <Input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
