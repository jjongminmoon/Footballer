import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideNavigation() {
  const [selected, setSelected] = useState("");

  const mypageList = [
    { title: "유저 정보", pathname: "/mypage/user" },
    { title: "선수 프로필", pathname: "/mypage/player" },
    { title: "내가 입단 신청한 팀", pathname: "/mypage/application-status" },
    { title: "받은 스카우트 제의", pathname: "/mypage/receive-scouting" },
    { title: "팀 정보", pathname: "/mypage/team" },
    { title: "팀원 정보", pathname: "/mypage/member" },
    { title: "매치 정보", pathname: "/mypage/match" },
    { title: "입단 신청 리스트", pathname: "/mypage/application-list" },
    { title: "보낸 스카우트 제의", pathname: "/mypage/offer-scouting" }
  ];

  return (
    <Container>
      <h1>
        <Link to="/mypage/user">마이 페이지</Link>
      </h1>
      <ul>
        <SubTitle>개인</SubTitle>
        {mypageList.slice(0, 4).map(({ title, pathname }) => (
          <Item
            key={title}
            onClick={() => setSelected(title)}
            color={title === selected ? "" : "gray"}
            fontWeight={title === selected ? "bold" : ""}
          >
            <Link to={pathname}>{title}</Link>
          </Item>
        ))}
      </ul>
      <ul>
        <SubTitle>팀</SubTitle>
        {mypageList.slice(4, 9).map(({ title, pathname }) => (
          <Item
            key={title}
            onClick={() => setSelected(title)}
            color={title === selected ? "" : "gray"}
            fontWeight={title === selected ? "bold" : ""}
          >
            <Link to={pathname}>{title}</Link>
          </Item>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 200px;
`;

const SubTitle = styled.p`
  padding-bottom: 5px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;

const Item = styled.li<{ color: string; fontWeight: string }>`
  margin-bottom: 15px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;
