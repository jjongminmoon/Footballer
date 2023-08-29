import styled from "@emotion/styled";
import { useState } from "react";
import { getUser } from "../../../../hooks/user";
import { MdArrowDropDown } from "react-icons/md";
import { handleScoring } from "../../../../hooks/scoring";

type Props = {
  title: string;
  collection: string;
  dataId: string;
};

const levelOptionList = [
  { title: "0점 (구단주 평가 실력과 완전 달라요)", score: 0 },
  { title: "5점 (구단주 평가 실력보다 조금 떨어져요)", score: 5 },
  { title: "10점 (구단주 평가 실력과 같아요)", score: 10 }
];

const mannerOptionList = [
  { title: "0점 (플레이가 너무 거칠고, 매너가 없어요)", score: 0 },
  { title: "5점 (보통이에요)", score: 5 },
  { title: "10점 (매너가 좋고, 분위기를 좋게 만들어요.)", score: 10 }
];

export default function TeamScoring({ title, collection, dataId }: Props) {
  const { userData } = getUser();
  const [openSelect, setOpenSelect] = useState(false);
  const [score, setscore] = useState(0);

  return (
    <Wrapper>
      <p>{title} 점수 매기기</p>
      <div className="select-box">
        <OpenSelectBox onClick={() => setOpenSelect(true)}>
          <MdArrowDropDown />
          {score}점
        </OpenSelectBox>
        {openSelect && (
          <SelectBox>
            {(title === "실력" ? levelOptionList : mannerOptionList).map(({ title, score }) => (
              <p
                key={score}
                onClick={() => {
                  setscore(score);
                  setOpenSelect(false);
                }}
              >
                {title}
              </p>
            ))}
          </SelectBox>
        )}
      </div>
      <Button onClick={() => handleScoring(title, collection, dataId, userData, score)}>
        저장
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--main-gray);
  border-radius: 10px;

  .select-box {
    position: relative;
  }
`;

const Button = styled.button`
  height: 30px;
  padding: 5px 10px 3px 10px;
  background-color: var(--main-button);
  border: none;
  border-radius: 6px;
  color: white;
`;

const OpenSelectBox = styled.div`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 2px solid var(--main-gray);
  border-radius: 10px;
  background-color: white;
  cursor: pointer;

  svg {
    position: absolute;
    top: 2px;
    right: 5px;
    font-size: 25px;
  }
`;

const SelectBox = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 295px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid var(--main-gray);
  background-color: white;
  z-index: 99;

  p {
    cursor: pointer;
  }
`;
