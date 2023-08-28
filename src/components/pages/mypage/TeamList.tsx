import styled from "@emotion/styled";
import { TeamProps } from "../../../model/team";

type Props = {
  data: TeamProps[];
  handleFunction1: (team: TeamProps, teamId: string, teamName: string) => void;
  handleFunction2?: (team: TeamProps, teamId: string) => void;
  button1: string;
  button2?: string;
  noList: string;
};

export default function TeamList({
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
        data.map((team: TeamProps) => (
          <Row key={team.id}>
            <Image>
              <Logo src={team.logo} alt={`${team.name}님의 이미지`} />
            </Image>
            <Name>{team.name}</Name>
            <Info>
              <p>구단주 : {team.owner.name}</p>
              <p>활동 지역 : {team.region}</p>
              <p>월 회비 : {team.fee}</p>
              <p>팀원 모집 여부 : {team.status ? "O" : "X"}</p>
              <p>팀 인원 : {team.member.length}명</p>
            </Info>
            <ButtonBox>
              <Button onClick={() => handleFunction1(team, team.id, team.name)}>{button1}</Button>
              {button2 && handleFunction2 && (
                <Button onClick={() => handleFunction2(team, team.id)}>{button2}</Button>
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
  width: 100px;
  height: 100px;
  border: 1px solid var(--main-gray);
  margin: 0 10px;
`;

const Logo = styled.img`
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
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--main-button);
  color: white;
`;
