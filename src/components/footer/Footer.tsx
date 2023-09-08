import styled from "@emotion/styled";
import Logo from "../commonUI/Logo";
import { regionList } from "../pages/register/registerData";
import { Link } from "react-router-dom";

const infoList = [
  { title: "풋볼러 소개", pathname: "/introduce" },
  { title: "풋볼러컵 대회", pathname: "/footballercup" },
  { title: "고객센터", pathname: "/cs" },
  { title: "인스타그램", pathname: "" },
  { title: "유튜브", pathname: "" }
];

export default function Footer() {
  return (
    <Section>
      <footer>
        <div className="content">
          <RegionList>
            <h2>서비스 지역</h2>
            {regionList.map(({ name }) => (
              <p key={name}>{name}</p>
            ))}
          </RegionList>
          <InfoList>
            <h2>풋볼러</h2>
            {infoList.map(({ title, pathname }) => (
              <Link key={title} to={pathname}>
                <p>{title}</p>
              </Link>
            ))}
          </InfoList>
        </div>
        <Logo fontSize="30px" color="var(--main-gray)">
          풋볼러
        </Logo>
        <Text>나의 축구 커리어, 풋볼러</Text>
        <div className="company-info">
          <p>인천시 서구 검암동 유현로 212, 2층 풋볼러</p>
          <p>contact@footballer.com</p>
          <p>032-2121-333X</p>
          <p>사업자 번호 6XX-81-00XXX | 대표 문종민 | 통신 판매업 신고 2023-인천검암-32XX</p>
          <p>@Copyright FOOTBALLER All rights reserved.</p>
        </div>
      </footer>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 80px;
  background-color: #2a2a2a;

  footer {
    max-width: 1024px;
    margin: 0 auto;
    padding: 40px 0;
    color: gray;
  }

  .content {
    margin-bottom: 40px;
  }

  .company-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    margin-top: 10px;
  }
`;

const RegionList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  margin-bottom: 10px;

  h2 {
    font-size: 18px;
    margin-bottom: 2px;
    color: var(--main-gray);
  }

  p {
    cursor: pointer;
  }
`;

const InfoList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;

  h2 {
    font-size: 19px;
    margin-top: 3px;
    color: var(--main-gray);
  }

  p {
    cursor: pointer;
  }
`;

const Text = styled.p`
  margin-top: 10px;
`;
