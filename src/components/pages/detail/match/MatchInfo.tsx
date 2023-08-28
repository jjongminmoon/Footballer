import styled from "@emotion/styled";
import { MatchProps } from "../../../../model/match";
import { getDay } from "../../../../util/dateAndDay";
import { getMyTeam } from "../../../../hooks/team";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";

type Props = {
  match: MatchProps;
};

export default function MatchInfo({ match }: Props) {
  const { teamData } = getMyTeam();
  const homeTeam = match?.participation[0];

  const handleParticipationMatch = () => {
    const matchDocRef = doc(dbService, "match", match.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (confirm(`${homeTeam.name} 팀과의 매치를 신청하시겠습니까?`)) {
      if (homeTeam.id === teamData.id) {
        alert("해당 매치를 등록한 팀으로 참가 불가능합니다.");
      } else if (teamData.name[teamData?.name.length - 1] === "무소속") {
        alert("소속팀이 없어 매치를 신청할 수 없습니다.");
      } else {
        updateDoc(matchDocRef, {
          participation: arrayUnion({
            id: teamData?.id,
            logo: teamData?.logo,
            name: teamData?.name
          })
        });

        updateDoc(teamDocRef, {
          history: arrayUnion(`${homeTeam.name} 팀과의 매치를 신청하였습니다.`)
        });
      }

      alert(`${homeTeam.name} 팀과의 매치가 신청되었습니다.`);
    } else {
      return;
    }
  };

  return (
    <Wrapper>
      <Info>
        <p>
          {match?.date} ({getDay(match?.date)}) 20:00
        </p>
        <Name>{match?.field.id}</Name>
        <p>{match?.field.address}</p>
      </Info>
      <Price>80,000원 / 2시간</Price>
      <Button
        onClick={handleParticipationMatch}
        backgroundColor={match?.participation.length > 1 ? "var(--main-gray)" : "var(--main-red)"}
        disabled={match?.participation.length > 1 ? true : false}
      >
        {match?.participation.length > 1 ? "매치 마감" : "매치 참가"} ({match?.participation.length}
        /2)
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 10px;
  padding: 20px;
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
  min-width: 400px;
  height: 204px;
`;

const Info = styled.div`
  margin-bottom: 5px;
`;

const Name = styled.h1`
  margin: 10px 0;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 13px;
  margin: 10px 0;
`;

const Button = styled.button<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 5px;
  margin-top: 20px;
  font-size: 13px;
`;
