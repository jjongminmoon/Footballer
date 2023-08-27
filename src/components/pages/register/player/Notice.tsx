import styled from "@emotion/styled";

export default function Notice() {
  return (
    <Container>
      <h1>공지 사항</h1>
      <p>1. 풋볼러의 원활한 이용을 위해 선수 등록을 진행해주세요!</p>
      <p>2. 본인을 나타낼 수 있는 이미지를 첨부해주세요. </p>
      <p>
        3. 이름(닉네임)은 풋볼러들간의 신뢰를 위해 등록한 뒤 수정이 불가하며, 실명 사용을
        권장합니다.
      </p>
      <p>4. 활동 지역과 포지션은 선수 등록 이후 수정이 가능합니다.</p>
      <p>
        5. 내가 본 나의 실력 선택에 따라 이후 다른 풋볼러들의 평가 점수에 영향을 미칠 수 있습니다.
      </p>
      <p>
        6. 선수 등록 시 소속팀은 무소속으로 됩니다. 나에게 맞는 팀을 찾거나 스카웃 제의를
        받아보세요.
      </p>
    </Container>
  );
}

const Container = styled.div`
  height: 320px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--main-gray);

  h1 {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 20px;
  }
`;
