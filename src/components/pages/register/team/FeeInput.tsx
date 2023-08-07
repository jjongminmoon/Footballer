import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  fee: number;
  setFee: React.Dispatch<SetStateAction<number>>;
};

export default function FeeInput({ fee, setFee }: Props) {
  return (
    <div>
      <h3>월 회비 (단위 : 만원)</h3>
      <Input
        type="number"
        min="0"
        value={fee}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFee(parseInt(e.target.value))}
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
