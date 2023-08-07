import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  title: string;
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
};

export default function TextInput({ title, text, setText }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <Input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
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
