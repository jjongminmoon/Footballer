import styled from "@emotion/styled";

export default function RuleInfo() {
  return (
    <Wrapper>
      <SubTitle>매치 진행 방식</SubTitle>
      <Content>
        <div>
          <h4>매치 규칙</h4>
          <p>- 모든 파울은 사이드라인에서 킥인</p>
          <p>- 골키퍼에게 백패스는 가능하지만, 손으로 잡는건 반칙</p>
          <p>- 사랑을 향한 태클 금지</p>
        </div>
        <div>
          <h4>진행방식</h4>
          <p>- 풋살화와 개인 음료만 준비</p>
          <p>- 매니저가 경기 진행 보조</p>
        </div>
        <div>
          <h4>기타</h4>
          <p>- 서로 존중하고 격려하며 즐겨요</p>
          <p>- 과한 승부욕으로 과격해지지 말아주세요</p>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  min-width: 400px;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h4 {
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
