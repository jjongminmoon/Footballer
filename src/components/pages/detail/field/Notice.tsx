import styled from "@emotion/styled";
import { FaShower, FaToilet, FaParking } from "react-icons/fa";
import { GiRunningShoe, GiVendingMachine } from "react-icons/gi";
import { FieldProps } from "../../../../model/field";

const noticeList = [
  { name: "샤워실", icon: <FaShower /> },
  { name: "풋살화 대여", icon: <GiRunningShoe /> },
  { name: "남녀 구분", icon: <FaToilet /> },
  { name: "매점/자판기", icon: <GiVendingMachine /> }
];

export default function Notice({ field }: { field: FieldProps }) {
  return (
    <>
      <SubTitle>시설 및 이용 규칙</SubTitle>
      <Wrapper>
        {noticeList.map(({ name, icon }) => (
          <div>
            {icon}
            <p>{name}</p>
          </div>
        ))}
        <div>
          <FaParking />
          <p>{field?.parking ? "주차가능" : "주차불가"}</p>
        </div>
      </Wrapper>
    </>
  );
}

const SubTitle = styled.h3`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  font-size: 18px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
