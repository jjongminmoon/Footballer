import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getMyTeam } from "../../../hooks/team";
import { getUser } from "../../../hooks/user";

export default function SideNavigation() {
  const [selected, setSelected] = useState("");
  const { userData } = getUser();
  const { teamData } = getMyTeam();

  const mypageList = [
    { title: "유저 정보", pathname: "/mypage/user", count: null },
    { title: "선수 프로필", pathname: "/mypage/player", count: null },
    {
      title: "내가 입단 신청한 팀",
      pathname: "/mypage/application-status",
      count: userData?.apply.length
    },
    {
      title: "받은 스카우트 제의",
      pathname: "/mypage/receive-scouting",
      count: userData?.scouted.length
    },
    { title: "개인 히스토리", pathname: "/mypage/individual-history", count: null },
    { title: "팀 정보", pathname: "/mypage/team", count: null },
    { title: "팀원 정보", pathname: "/mypage/member", count: null },
    { title: "매치 정보", pathname: "/mypage/match", count: null },
    {
      title: "입단 신청 리스트",
      pathname: "/mypage/application-list",
      count: teamData?.applicationList.length
    },
    {
      title: "보낸 스카우트 제의",
      pathname: "/mypage/offer-scouting",
      count: teamData?.scoutList.length
    },
    { title: "팀 히스토리", pathname: "/mypage/team-history", count: null }
  ];

  return (
    <Container>
      <h1>
        <Link to="/mypage/user">마이 페이지</Link>
      </h1>
      <ul>
        <SubTitle>개인</SubTitle>
        {mypageList.slice(0, 5).map(({ title, pathname, count }) => (
          <Item
            key={title}
            onClick={() => setSelected(title)}
            color={title === selected ? "" : "gray"}
            fontWeight={title === selected ? "bold" : ""}
          >
            <Link to={pathname}>{title}</Link>
            {count ? <Count>{count}</Count> : null}
          </Item>
        ))}
      </ul>
      <ul>
        <SubTitle>팀</SubTitle>
        {mypageList.slice(5, 11).map(({ title, pathname, count }) => (
          <Item
            key={title}
            onClick={() => setSelected(title)}
            color={title === selected ? "" : "gray"}
            fontWeight={title === selected ? "bold" : ""}
          >
            <Link to={pathname}>{title}</Link>
            {count ? <Count>{count}</Count> : null}
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
  display: flex;
  align-itesm: center;
  gap: 10px;
  margin-bottom: 15px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const Count = styled.p`
  font-size: 12px;
  color: white;
  text-align: center;
  width: 18px;
  height: 18px;
  padding: 1.5px 1px 0 0;
  background-color: var(--main-red);
  border-radius: 999px;
`;
