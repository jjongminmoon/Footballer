import styled from "@emotion/styled";
import { UserProps } from "../../../model/user";
import { getMyTeam } from "../../../hooks/team";

type Props = {
  data: UserProps[];
  handleFunction1: (player: UserProps) => void;
  handleFunction2?: (player: UserProps) => void;
  button1: string;
  button2?: string;
  noList: string;
};

export default function PlayerList({
  data,
  handleFunction1,
  handleFunction2,
  button1,
  button2,
  noList
}: Props) {
  const { teamData } = getMyTeam();

  return (
    <>
      <Count>총 인원 : {data?.length}명</Count>
      <List>
        {data?.length > 0 ? (
          data.map((player: UserProps) => (
            <Row key={player.id}>
              <Image>
                <Player src={player.image} alt={`${player.name}님의 이미지`} />
              </Image>
              <Name>
                {player.name} {teamData.owner.name === player.name && "👑"}
              </Name>
              <Info>
                <p>소속팀 : {player.team[player.team.length - 1]}</p>
                <p>활동 지역 : {player.region}</p>
                <p>생년월일 : {player.birth}</p>
                <p>신장 : {player.height}cm</p>
                <p>몸무게 : {player.weight}kg</p>
                <p>포지션 : {player.position}</p>
                <p>레벨 : {player.level}</p>
              </Info>
              <ButtonBox>
                <Button onClick={() => handleFunction1(player)}>{button1}</Button>
                {button2 && handleFunction2 && (
                  <Button onClick={() => handleFunction2(player)}>{button2}</Button>
                )}
              </ButtonBox>
            </Row>
          ))
        ) : (
          <Row>
            <p className="no-list">{noList}</p>
          </Row>
        )}
      </List>
    </>
  );
}

const Count = styled.p`
  margin: 20px 0;
`;

const List = styled.div`
  border: 1px solid var(--main-gray);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  border-bottom: 1px solid var(--main-gray);
  padding: 10px;

  :last-child {
    border-bottom: none;
  }
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid var(--main-gray);
  margin: 0 10px;
`;

const Player = styled.img`
  width: 100%;
  height: 100%;
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--main-button);
  color: white;
`;
