import styled from "@emotion/styled";
import ImageCard from "./ImageCard";
import RegionSelect from "../RegionSelect";
import PositionSelect from "./PositionSelect";
import LevelSelect from "./LevelSelect";
import BirthInput from "./BirthInput";
import TextInput from "../TextInput";
import Notice from "./Notice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import addUser, { getAuthData } from "../../../../hooks/user";

export default function RegisterPlayerPage() {
  const { authData } = getAuthData();
  const [image, setImage] = useState<any>("");
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [birth, setBirth] = useState("");
  const [region, setRegion] = useState("");
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  const addUserData = () => {
    if (confirm("작성된 내용으로 선수 등록을 완료하시겠습니까?")) {
      if (image && name && height && weight && birth && position && region && level !== "") {
        addUser(authData?.email, image, name, height, weight, birth, position, region, level);
        alert("풋볼러 정보 등록이 완료되었습니다.");
        navigate("/");
      } else if (isNaN(Number(height || weight))) {
        alert("신장과 몸무게는 숫자만 입력 가능합니다.");
      } else {
        alert("모든 항목을 입력해주세요.");
      }
    } else {
      return;
    }
  };

  return (
    <section>
      <Notice />
      <h1>선수 정보 등록</h1>
      <Register>
        <ImageCard image={image} setImage={setImage} />
        <Infomation>
          <TextInput title="이름(닉네임)" value={name} setState={setName} />
          <TextInput title="신장(cm)" value={height} setState={setHeight} />
          <TextInput title="몸무게(kg)" value={weight} setState={setWeight} />
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
  display: flex;
  flex-direction: column;
  gap: 5px;
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
    font-size: 14px;
    margin-bottom: 10px;
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
