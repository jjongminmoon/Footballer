import styled from "@emotion/styled";
import { FaShower, FaToilet, FaParking } from "react-icons/fa";
import { GiRunningShoe, GiVendingMachine } from "react-icons/gi";
import { TbSoccerField } from "react-icons/tb";
import { FieldProps } from "../../../../model/field";

export default function Notice({ field }: { field: FieldProps }) {
  //
  const noticeList = [
    { name: `${field?.size}(m)`, icon: <TbSoccerField /> },
    { name: "샤워실", icon: <FaShower /> },
    { name: "풋살화 대여", icon: <GiRunningShoe /> },
    { name: "남녀 구분", icon: <FaToilet /> },
    { name: "매점/자판기", icon: <GiVendingMachine /> },
    { name: `${field?.parking ? "주차가능" : "주차불가"}`, icon: <FaParking /> }
  ];

  return (
    <Wrapper>
      <SubTitle>시설 및 이용 규칙</SubTitle>
      <Info>
        {noticeList.map(({ name, icon }) => (
          <div>
            {icon}
            <p>{name}</p>
          </div>
        ))}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
`;

const Info = styled.div`
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
