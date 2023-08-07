import styled from "@emotion/styled";
import CommonBanner from "../../../ui/CommonBanner";
import LogoImage from "./LogoImage";
import { useState } from "react";
import TextInput from "../TextInput";
import FeeInput from "./FeeInput";
import StatusSelect from "../StatusSelect";
import RegionSelect from "../RegionSelect";
import addTeam, { getAllTeam } from "../../../../hooks/team";
import { useNavigate } from "react-router-dom";
import { TeamProps } from "../../../../model/team";
import { getUser } from "../../../../hooks/user";

export default function RegisterTeamPage() {
  const { userData } = getUser();
  const { allTeam } = getAllTeam();
  const owner = userData?.name;
  const [logo, setLogo] = useState<any>("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState(true);
  const [fee, setFee] = useState(0);
  const [introduce, setIntroduce] = useState("");
  const navigate = useNavigate();

  const addTeamData = () => {
    if (allTeam.map((team: TeamProps) => team.name).includes(name)) {
      alert("팀명을 다른 팀이 사용중입니다.");
      return;
    } else {
      addTeam(logo, owner, name, region, status, fee, introduce);
      alert("팀 등록이 완료되었습니다.");
      navigate("/");
    }
  };

  return (
    <section>
      <CommonBanner />
      <h1>팀 등록</h1>
      <Register>
        <LogoImage logo={logo} setLogo={setLogo} />
        <Infomation>
          <TextInput title="팀명" text={name} setText={setName} />
          <RegionSelect region={region} setRegion={setRegion} />
          <StatusSelect title="팀원 모집 여부" status={status} setStatus={setStatus} />
          <FeeInput fee={fee} setFee={setFee} />
          <TextInput title="팀 한줄 소개" text={introduce} setText={setIntroduce} />
          <Button onClick={addTeamData}>제출</Button>
        </Infomation>
      </Register>
    </section>
  );
}

const Register = styled.section`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 10px;
  border: 3px solid var(--main-gray);
  border-radius: 10px;
  margin-top: 20px;

  #file-input {
    display: none;
  }

  h3 {
    margin-bottom: 5px;
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
