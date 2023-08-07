import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const mypageList = [
  { title: "유저 정보", pathname: "/mypage/user" },
  { title: "선수 프로필", pathname: "/mypage/player" },
  { title: "팀 정보", pathname: "/mypage/team" },
  { title: "내가 쓴 게시물", pathname: "/mypage/team" },
  { title: "좋아요한 풋볼러", pathname: "/mypage/team" }
];

export default function SideNavigation() {
  const [selected, setSelected] = useState("");

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
