import styled from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  title: string;
  status: boolean;
  setStatus: React.Dispatch<SetStateAction<boolean>>;
};

export default function StatusSelect({ title, status, setStatus }: Props) {
  return (
    <>
      <h3>{title}</h3>
      <Select>
        <Status
          onClick={() => setStatus(true)}
          backgroundColor={status === true ? "var(--main-gray)" : ""}
        >
          O
        </Status>
        <Status
          onClick={() => setStatus(false)}
          backgroundColor={status === false ? "var(--main-gray)" : ""}
        >
          X
        </Status>
      </Select>
    </>
  );
}

const Select = styled.div`
  display: flex;
  gap: 5px;
  font-size: 11px;
`;

const Status = styled.p<{ backgroundColor: string }>`
  padding: 8px 10px;
  border: 1px solid var(--main-gray);
  border-radius: 999px;
  background-color: ${(props) => props.backgroundColor};
`;
