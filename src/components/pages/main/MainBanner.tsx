import styled from "@emotion/styled";
import main1 from "../../../assets/images/main1.webp";
import main2 from "../../../assets/images/main2.webp";
import main3 from "../../../assets/images/main3.webp";
import main4 from "../../../assets/images/main4.webp";
import { Link } from "react-router-dom";

const imageList = [
  { image: main1, name: "팀 등록", pathname: "/register/team" },
  { image: main2, name: "팀/선수 찾기", pathname: "/search" },
  { image: main3, name: "구장 정보", pathname: "/field" },
  { image: main4, name: "풋볼러컵", pathname: "/footballercup" }
];

export default function MainBanner() {
  return (
    <Container>
      <BannerBox>
        {imageList.map(({ image, name, pathname }) => (
          <div key={name}>
            <Link to={pathname}>
              <img src={image} alt={name} />
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </BannerBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 410px;
  margin-left: calc(-50vw + 50%);
  background-color: var(--main-light-gray);
`;

const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 1024px;
  height: 100%;
  padding: 20px;
  margin: 0 auto;

  div {
    position: relative;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  p {
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-weight: bold;
  }
`;
