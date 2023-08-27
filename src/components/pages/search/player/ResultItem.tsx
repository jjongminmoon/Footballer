import styled from "@emotion/styled";
import { UserProps } from "../../../../model/user";
import { Link, useNavigate } from "react-router-dom";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";
import { getMyTeam } from "../../../../hooks/team";
import { getUser } from "../../../../hooks/user";
import { getPlayerLevelScore, getPlayerMannerScore } from "../../../../hooks/scoring";

export default function ResultItem({ player }: { player: UserProps }) {
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const levelScore = getPlayerLevelScore(player);
  const mannerScore = getPlayerMannerScore(player);
  const navigate = useNavigate();

  const scoutingOffer = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.name) {
      if (confirm(`${player.name} 선수에게 스카우트 제의를 하시겠습니까?`)) {
        if (player.team[player.team.length - 1] === "무소속") {
          updateDoc(teamDocRef, {
            scoutList: arrayUnion(player.id),
            history: arrayUnion(`${player.name} 선수에게 스카우트 제의를 보냈습니다.`)
          });
          updateDoc(playerDocRef, {
            scouted: arrayUnion(teamData.id),
            history: arrayUnion(`${teamData.name} 팀에서 스카우트 제의를 보냈습니다.`)
          })
            .then(() =>
              alert(
                `스카우트 제의가 완료되었습니다. ${player.name} 선수가 승인 시 팀에 등록됩니다.`
              )
            )
            .catch((e) => alert(e));
          if (confirm("보낸 스카우트 제의 페이지로 이동하시겠습니까?"))
            navigate("/mypage/offer-scouting");
        } else {
          alert(`${player.name} 선수는 소속팀이 있어 스카우트 제의를 할 수 없습니다.`);
        }
      } else {
        return;
      }
    } else {
      alert("스카우트 제의는 구단주만 가능합니다.");
    }
  };

  return (
    <Row key={player.id}>
      <Link to={`/detail/player/${player.number}`}>
        <Image>
          <Player src={player.image} alt={`${player.name}님의 이미지`} />
        </Image>
        <Name>{player.name}</Name>
      </Link>
      <Info>
        <p>소속팀 : {player.team[player.team.length - 1]}</p>
        <p>활동 지역 : {player.region}</p>
        <p>생년월일 : {player.birth}</p>
        <p>신장 : {player.height}cm</p>
        <p>몸무게 : {player.weight}kg</p>
        <p>포지션 : {player.position}</p>
        <p>레벨 : {player.level}</p>
      </Info>
      <Score>실력 점수 : {levelScore}</Score>
      <Score>매너 점수 : {mannerScore}</Score>
      {teamData?.scoutList.includes(player.id) ? (
        <Button backgroundColor="var(--main-red)" disabled>
          스카우트 중
        </Button>
      ) : (
        <Button backgroundColor="var(--main-button)" onClick={() => scoutingOffer(player)}>
          스카우트 제의
        </Button>
      )}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border-bottom: 1px solid var(--main-gray);
  padding: 10px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid var(--main-gray);
  border-radius: 10px;
  margin-right: 10px;
`;

const Player = styled.img`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  height: 100%;
  font-size: 13px;
  padding: 10px;
  background-color: var(--main-light-gray);
  border-radius: 10px;
  margin-left: auto;

  p {
    font-size: 11px;
  }
`;

const Score = styled.p`
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  font-size: 13px;
  background-color: var(--main-gray);
`;

const Button = styled.button<{ backgroundColor: string }>`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  margin-left: auto;
  margin-right: 20px;
`;
