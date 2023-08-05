import styled from "@emotion/styled";
import ImageCard from "./ImageCard";
import RegionSelect from "./RegionSelect";
import PositionSelect from "./PositionSelect";
import LevelSelect from "./LevelSelect";
import NameInput from "./NameInput";
import BirthInput from "./BirthInput";
import addUser, { getAuthData } from "../../../hooks/user";
import CommonBanner from "../../ui/CommonBanner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const { authData } = getAuthData();
  const [image, setImage] = useState<any>("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [region, setRegion] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  const addUserData = () => {
    addUser(authData?.email, image, birth, name, position, region, level);
    alert("풋볼러 정보 등록이 완료되었습니다.");
    navigate("/");
  };

  return (
    <Section>
      <CommonBanner />
      <h1>풋볼러 정보 등록</h1>
      <Register>
        <ImageCard image={image} setImage={setImage} />
        <Infomation>
          <NameInput name={name} setName={setName} />
          <BirthInput birth={birth} setBirth={setBirth} />
          <RegionSelect region={region} setRegion={setRegion} />
          <PositionSelect position={position} setPosition={setPosition} />
          <LevelSelect level={level} setLevel={setLevel} />
          <Button onClick={addUserData}>제출</Button>
        </Infomation>
      </Register>
    </Section>
  );
}

const Section = styled.section``;

const Register = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  #file-input {
    display: none;
  }
`;

const Infomation = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 3px solid var(--main-gray);
  border-radius: 10px;

  h1 {
    font-size: 30px;
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--main-button);
  color: white;
  border: none;
  border-radius: 6px;
`;
