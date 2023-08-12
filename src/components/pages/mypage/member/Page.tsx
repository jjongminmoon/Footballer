import styled from "@emotion/styled";
import { getMyTeam } from "../../../../hooks/team";
import MypageContainer from "../../../ui/MypageContainer";
import { UserProps } from "../../../../model/user";

export default function MemberPage() {
  const { teamData } = getMyTeam();
  const memberList = teamData?.member;

  return (
    <MypageContainer>
      <h1>팀원 관리</h1>
      <List>
        {memberList?.map((player: UserProps) => (
          <Row>
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
            <Button onClick={() => {}}>방출</Button>
          </Row>
        ))}
      </List>
    </MypageContainer>
  );
}

const List = styled.div`
  margin-top: 20px;
  border: 2px solid var(--main-gray);
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
