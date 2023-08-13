import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideNavigation() {
  const [selected, setSelected] = useState("");

  const mypageList = [
    { title: "유저 정보", pathname: "/mypage/user" },
    { title: "선수 프로필", pathname: "/mypage/player" },
    { title: "팀 정보", pathname: "/mypage/team" },
    { title: "팀원 정보", pathname: "/mypage/member" },
    { title: "입단 신청한 팀", pathname: "/mypage/application-status" },
    { title: "입단 신청 리스트", pathname: "/mypage/application-list" }
  ];

  return (
    <Container>
      <h1>
        <Link to="/mypage/user">마이 페이지</Link>
      </h1>
      <ul>
        {mypageList.map(({ title, pathname }) => (
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
  width: 200px;

  h1 {
    margin-bottom: 20px;
  }
`;

const Item = styled.li<{ color: string; fontWeight: string }>`
  margin-bottom: 5px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;
