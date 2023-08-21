import styled from "@emotion/styled";
import { UserProps } from "../../../../model/user";
import { Link, useNavigate } from "react-router-dom";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../../service/firebase";
import { getMyTeam } from "../../../../hooks/team";
import { getUser } from "../../../../hooks/user";

export default function ResultItem({ player }: { player: UserProps }) {
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const navigate = useNavigate();

  const scoutingOffer = (player: UserProps) => {
    const playerDocRef = doc(dbService, "user", player.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (teamData.owner.name === userData.name) {
      if (confirm(`${player.name} 선수에게 스카우트 제의를 하시겠습니까?`)) {
        if (player.team === "무소속") {
          updateDoc(teamDocRef, {
            scoutList: arrayUnion(player.id)
          });
          updateDoc(playerDocRef, {
            scouted: arrayUnion(teamData.id)
          })
            .then(() =>
              alert(
                `스카우트 제의가 완료되었습니다. ${player.name} 선수가 승인 시 팀에 등록됩니다.`
              )
            )
            .catch((e) => alert(e));

          navigate("/mypage/application-status");
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

  const levelScore =
    player?.goodPlayer.length > 0
      ? (
          player?.goodPlayer.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          player?.goodPlayer.length
        ).toFixed(1)
      : 0;

  const mannerScore =
    player?.manner.length > 0
      ? (
          player?.manner.map(({ score }) => score).reduce((a, b) => a + b, 0) /
          player?.manner.length
        ).toFixed(1)
      : 0;

  return (
    <Row key={player.id}>
      <Link to={`/detail/player/${player.number}`}>
        <Image>
          <Player src={player.image} alt={`${player.name}님의 이미지`} />
        </Image>
        <Name>{player.name}</Name>
      </Link>
      <Info>
        <p>소속팀 : {player.team}</p>
        <p>활동 지역 : {player.region}</p>
        <p>생년월일 : {player.birth}</p>
        <p>신장 : {player.height}cm</p>
        <p>몸무게 : {player.weight}kg</p>
        <p>포지션 : {player.position}</p>
        <p>레벨 : {player.level}</p>
      </Info>
      <Score>실력 점수 : {levelScore}점</Score>
      <Score>매너 점수 : {mannerScore}점</Score>
      <Button onClick={() => scoutingOffer(player)}>스카우트 제의</Button>
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

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--main-button);
  color: white;
  margin-left: auto;
  margin-right: 20px;
`;
