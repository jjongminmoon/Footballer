import styled from "@emotion/styled";
import { UserProps } from "../../../../model/user";

type Props = {
  player: UserProps;
  children: React.ReactNode;
};

export default function Profile({ player, children }: Props) {
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
    <Wrapper>
      <Image>
        <img src={player?.image} alt={`${player?.name}님의 이미지`} />
      </Image>
      <Info>
        <p>● 이름(닉네임) : {player?.name}</p>
        <p>● 생년월일 : {player?.birth}</p>
        <p>● 신장 : {player?.height}cm</p>
        <p>● 몸무게 : {player?.weight}kg</p>
        <p>● 활동 지역 : {player?.region}</p>
        <p>● 소속팀 : {player?.team}</p>
        <p>● 포지션 : {player?.position}</p>
        <p>● 실력 : {player?.level}</p>
        <p>● 실력 점수 : {levelScore}점</p>
        <p>● 매너 점수 : {mannerScore}점</p>
        {children}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

const Image = styled.div`
  width: 300px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Info = styled.div``;
