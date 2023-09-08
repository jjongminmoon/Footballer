import styled from "@emotion/styled";
import Logo from "../../commonUI/Logo";

export default function IntroducePage() {
  return (
    <section>
      <Container>
        <Logo fontSize="40px">풋볼러</Logo>
        <div>
          <p>반갑습니다. 풋볼러 여러분들!</p>
          <p>
            풋볼러는 공을 차는 것을 좋아하는 모든 사람들이 선수 등록이나, 팀 등록을 통해 교류를 할
            수 있는 서비스에요.
          </p>
          <p>
            선수 등록을 한 뒤 들어가고 싶은 팀에 입단 신청을 하거나, 본인 실력 점수를 올려 스카우트
            제의를 받아보세요.
          </p>
          <p>본인이 평가한 실력과 진짜 실력이 비슷하다면 더 높은 실력 점수를 받을 수 있습니다! </p>
          <br />
          <p>
            또는, 팀을 등록 한 뒤 선수들을 영입하기 위해 스카우트 제의를 하거나, 입단 신청을
            받아보세요.
          </p>
          <p>높은 팀 실력 점수를 받으면 많은 선수들이 입단 신청을 할거에요!</p>
          <br />
          <p>
            선수/팀 매너 점수는 아주 중요해요. 매너 있는 플레이를 통해 높은 매너 점수를 유지할 수
            있도록해요.
          </p>
          <br />
          <p>
            매치 등록을 통해 다른 팀과 경기를 하거나, 다른 팀이 등록한 매치에 참가 신청을 해보세요.
          </p>
          <p>또는, 풋볼러에서 개최하는 풋볼러컵에 참가해 다양한 팀과 경기를 할 수 있어요.</p>
          <p>풋볼러컵 성적은 팀 이력에 올라가니 좋은 성적을 받으면 팀 명성이 올라갈거에요!</p>
          <br />
          <p>풋볼러를 통해 더 즐겁게 공을 차고, 본인을 알려보세요!</p>
        </div>
      </Container>
    </section>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  margin-top: 20px;
  background-color: var(--main-light-gray);
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
