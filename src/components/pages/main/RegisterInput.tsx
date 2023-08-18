import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { getAllField } from "../../../hooks/field";
import { FieldProps } from "../../../model/field";

type Props = {
  date: string;
  field: string;
  rule: string;
  setDate: React.Dispatch<SetStateAction<string>>;
  setField: React.Dispatch<SetStateAction<string>>;
  setRule: React.Dispatch<SetStateAction<string>>;
  dateArr: string[];
};

const inputList = [
  { id: 1, title: "날짜" },
  { id: 2, title: "구장" },
  { id: 3, title: "경기 방식" }
];

const ruleList = [
  { id: 1, title: "4 vs 4 매치" },
  { id: 2, title: "6 vs 6 매치" }
];

export default function RegisterInput({
  date,
  field,
  rule,
  setDate,
  setField,
  setRule,
  dateArr
}: Props) {
  const { allField } = getAllField();
  const [openSelect, setOpenSelect] = useState(false);
  const [inputId, setInputId] = useState(0);

  return (
    <InputList>
      <div>
        {inputList.map(({ id, title }) => (
          <div key={id} className="select-box">
            <p>{title}</p>
            <InputBox>
              <Input
                type="text"
                placeholder="선택해주세요"
                value={id === 1 ? date : id === 2 ? field : rule}
                onClick={() => {
                  setOpenSelect(true);
                  setInputId(id);
                }}
                readOnly
              />
              <MdArrowDropDown />
              {openSelect && inputId === id && (
                <SelectBox>
                  {inputId === 1
                    ? dateArr.map((date: string) => (
                        <p
                          onClick={() => {
                            setOpenSelect(false);
                            setDate(date);
                          }}
                        >
                          {date}
                        </p>
                      ))
                    : inputId === 2
                    ? allField.map((field: FieldProps) => (
                        <p
                          onClick={() => {
                            setOpenSelect(false);
                            setField(field.id);
                          }}
                        >
                          {field.id}
                        </p>
                      ))
                    : ruleList.map((rule) => (
                        <p
                          onClick={() => {
                            setOpenSelect(false);
                            setRule(rule.title);
                          }}
                        >
                          {rule.title}
                        </p>
                      ))}
                </SelectBox>
              )}
            </InputBox>
          </div>
        ))}
      </div>
    </InputList>
  );
}

const InputList = styled.div`
  margin-top: 15px;

  p {
    margin: 10px 0 5px 0;
  }
`;

const InputBox = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 6px;
    right: 5px;
    font-size: 25px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid var(--main-gray);
  border-radius: 10px;
  cursor: pointer;
`;

const SelectBox = styled.div`
  position: absolute;
  top: 41px;
  width: 100%;
  height: 300px;
  background-color: white;
  border: 1px solid var(--main-gray);
  border-radius: 10px;
  overflow: scroll;
  z-index: 99;

  p {
    font-size: 12px;
    padding: 3px;
    cursor: pointer;

    &:hover {
      background-color: var(--main-gray);
    }
  }
`;
