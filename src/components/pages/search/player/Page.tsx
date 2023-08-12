import styled from "@emotion/styled";
import { getAllUser } from "../../../../hooks/user";
import { UserProps } from "../../../../model/user";

export default function PlayerSearchPage() {
  const { allUser: playerList } = getAllUser();

  return (
    <>
      {playerList.map((player: UserProps) => (
        <Row>
          <Image>
            <Player src={player.image} alt={`${player.name}님의 이미지`} />
          </Image>
          <Name>{player.name}</Name>
          <Info>
            <p>소속팀 : {player.team}</p>
            <p>활동 지역 : {player.region}</p>
            <p>생년월일 : {player.birth}</p>
            <p>포지션 : {player.position}</p>
          </Info>
          <Score>실력 점수 : {player.goodPlayer}점</Score>
          <Score>매너 점수 : {player.manner}점</Score>
          <Button>스카우트 제의</Button>
        </Row>
      ))}
    </>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border-bottom: 1px solid var(--main-gray);
  padding: 10px;
`;

const Image = styled.div`
  border: 1px solid var(--main-gray);
  margin-right: 10px;
`;

const Player = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px;
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
  padding: 5px;
  border-radius: 10px;
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
