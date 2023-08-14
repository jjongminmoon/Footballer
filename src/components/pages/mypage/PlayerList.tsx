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
  return (
    <List>
      {data?.length > 0 ? (
        data.map((player: UserProps) => (
          <Row key={player.id}>
            <Image>
              <Player src={player.image} alt={`${player.name}님의 이미지`} />
            </Image>
            <Name>{player.name}</Name>
            <Info>
              <p>활동 지역 : {player.region}</p>
              <p>생년월일 : {player.birth}</p>
              <p>포지션 : {player.position}</p>
              <p>실력 점수 : {player.goodPlayer}점</p>
              <p>매너 점수 : {player.manner}점</p>
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
  );
}

const List = styled.div`
  margin-top: 20px;
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
  height: 100px;
  border: 1px solid var(--main-gray);
  margin: 0 10px;
`;

const Player = styled.img`
  width: 100px;
  height: 100px;
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
