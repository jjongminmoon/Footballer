import styled from "@emotion/styled";
import ImageCard from "./ImageCard";
import RegionSelect from "../RegionSelect";
import PositionSelect from "./PositionSelect";
import LevelSelect from "./LevelSelect";
import BirthInput from "./BirthInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CommonBanner from "../../../ui/CommonBanner";
import addUser, { getAuthData } from "../../../../hooks/user";
import TextInput from "../TextInput";

export default function RegisterPlayerPage() {
  const { authData } = getAuthData();
  const [image, setImage] = useState<any>("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [region, setRegion] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  const addUserData = () => {
    if (
      image !== "" &&
      name !== "" &&
      birth !== "" &&
      region !== "" &&
      position !== "" &&
      level !== ""
    ) {
      addUser(authData?.email, image, birth, name, position, region, level);
      alert("풋볼러 정보 등록이 완료되었습니다.");
      navigate("/");
    }
  };

  return (
    <section>
      <CommonBanner />
      <h1>선수 정보 등록</h1>
      <Register>
        <ImageCard image={image} setImage={setImage} />
        <Infomation>
          <TextInput title="이름(닉네임)" text={name} setText={setName} />
          <BirthInput birth={birth} setBirth={setBirth} />
          <RegionSelect region={region} setRegion={setRegion} />
          <PositionSelect position={position} setPosition={setPosition} />
          <LevelSelect level={level} setLevel={setLevel} />
          <Button onClick={addUserData}>제출</Button>
        </Infomation>
      </Register>
    </section>
  );
}

const Register = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 20px;
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
