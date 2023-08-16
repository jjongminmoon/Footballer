import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  title: string;
  value: string;
  setState: React.Dispatch<SetStateAction<string>>;
  placeholder?: string;
};

export default function TextInput({ title, value, setState, placeholder }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <Input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
        placeholder={placeholder}
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
