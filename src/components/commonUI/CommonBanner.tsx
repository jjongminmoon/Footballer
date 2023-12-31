import styled from "@emotion/styled";
import banner from "../../assets/images/banner.webp";

export default function CommonBanner() {
  return (
    <Container>
      <Banner src={banner} alt="풋볼러 메인 배너 이미지" />
      <Text>
        <p>
          나의 축구 커리어, <span>풋볼러!</span>
        </p>
        <p>팀에 들어가거나, 팀을 만들어 선수를 영입해보세요.</p>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 20px 0;

  div {
  }

  span {
    font-size: 30px;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 10px;
  background-color: black;
  opacity: 0.7;
`;

const Text = styled.div`
  position: absolute;
  bottom: 60px;
  left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  color: white;
`;
