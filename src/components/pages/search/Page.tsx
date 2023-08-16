import styled from "@emotion/styled";
import CommonBanner from "../../ui/CommonBanner";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const categoryList = [
  { name: "팀 찾기", pathname: "/search/team" },
  { name: "선수 찾기", pathname: "/search/player" }
];

export default function SearchPage() {
  const [selected, setSelected] = useState("찾으실 카테고리를 선택해주세요.");

  return (
    <section>
      <CommonBanner />
      <Category>
        {categoryList.map(({ name, pathname }) => (
          <Link to={pathname} key={pathname}>
            <Button
              onClick={() => setSelected(name)}
              backgroundColor={selected === name ? "var(--main-red)" : ""}
            >
              {name}
            </Button>
          </Link>
        ))}
      </Category>
      <Title>{selected}</Title>
      <Container>
        <Outlet />
      </Container>
    </section>
  );
}

const Category = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div<{ backgroundColor: string }>`
  text-align: center;
  width: 100px;
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid var(--main-gray);
  border-radius: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 20px;
`;

const Container = styled.div`
  height: 450px;
  margin-top: 20px;
  overflow: scroll;
  border: 2px solid var(--main-gray);
`;
