import styled from "@emotion/styled";
import { SetStateAction } from "react";

const levelList = [
  { name: "스타터", desc: "이제 입문한 사람이에요." },
  { name: "비기너", desc: "패스, 드리블, 컨트롤 같은 기본기를 갈고 닦는 단계에요." },
  { name: "아마추어", desc: "기본기를 갖췄어요. 실전 경기로 경험을 쌓고 있어요." },
  { name: "세미프로", desc: "높은 확률로 공을 지켜내고, 패스와 드리블로 압박을 벗어날 수 있어요." },
  { name: "프로", desc: "빠른 흐름 속에서도 여유롭게 플레이를 이끌어요." },
  { name: "선수 출신", desc: "고등학교 이상 선수 경력이 있어요." }
];

type Props = {
  level: string;
  setLevel: React.Dispatch<SetStateAction<string>>;
};

export default function LevelSelect({ level, setLevel }: Props) {
  return (
    <>
      <h3>내가 본 나의 실력</h3>
      <Select>
        {levelList.map(({ name, desc }) => (
          <div key={name}>
            <Level
              onClick={() => setLevel(name)}
              backgroundColor={name === level ? "var(--main-red)" : "var(--main-light-gray)"}
            >
              {name}
            </Level>
            <Desc>{desc}</Desc>
          </div>
        ))}
      </Select>
    </>
  );
}

const Select = styled.div`
  font-size: 11px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Level = styled.p<{ backgroundColor: string }>`
  width: 90px;
  padding: 5px;
  text-align: center;
  border: 1px solid var(--main-gray);
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Desc = styled.p``;
