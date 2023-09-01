import styled from "@emotion/styled";
import trophyImage from "../../../assets/images/trophy.webp";

export default function TrophyImage() {
  return (
    <Image>
      <img src={trophyImage} alt="풋볼러컵 이미지" />
    </Image>
  );
}

const Image = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
`;
