import styled from "@emotion/styled";

export default function Notice() {
  return (
    <Container>
      <h1>공지 사항</h1>
      <p>1. 풋볼러에서 개최하는 풋볼러컵에 참가해 우리팀의 실력을 보여주세요!</p>
      <p>2. 풋볼러컵 참가는 총 8팀을 선착순으로 받아요!</p>
      <p>3. 경기에서 승리 시 승점 3점을 획득, 패배 시 승점은 없어요!</p>
      <p>4. 다른 참가팀과 한번씩 총 7번의 경기 후 최종 승점을 가장 많이 획득한 팀이 우승이에요!</p>
      <p>5. 풋볼러컵 참가 후 성적이 팀의 이력으로 들어가요!</p>
    </Container>
  );
}

const Container = styled.div`
  height: 270px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--main-light-gray);

  h1 {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 20px;
  }
`;
