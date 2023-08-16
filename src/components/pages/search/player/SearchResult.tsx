import styled from "@emotion/styled";
import { UserProps } from "../../../../model/user";
import { Link } from "react-router-dom";

type Props = {
  player: UserProps;
};

export default function SearchResult({ player }: Props) {
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
        <p>포지션 : {player.position}</p>
      </Info>
      <Score>실력 점수 : {levelScore}점</Score>
      <Score>매너 점수 : {mannerScore}점</Score>
      <Button>스카우트 제의</Button>
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
`;

const Score = styled.p`
  width: 150px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  font-size: 13px;
  background-color: var(--main-red);
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
