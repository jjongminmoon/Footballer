import styled from "@emotion/styled";
import CommonBanner from "../../ui/CommonBanner";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const categoryList = [
  { name: "팀 찾기", pathname: "/search/team" },
  { name: "선수 찾기", pathname: "/search/player" }
];

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section>
      <CommonBanner />
      <Category>
        {categoryList.map(({ name, pathname }) => (
          <Link to={pathname} key={pathname}>
            <Button
              onClick={() => setSelectedCategory(name)}
              backgroundColor={selectedCategory === name ? "var(--main-red)" : ""}
            >
              {name}
            </Button>
          </Link>
        ))}
      </Category>
      <Result>
        <Outlet />
      </Result>
    </section>
  );
}

const Category = styled.div`
  display: flex;
`;

const Button = styled.div<{ backgroundColor: string }>`
  text-align: center;
  width: 100px;
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid var(--main-gray);
  cursor: pointer;
`;

const Result = styled.div`
  margin-top: 10px;
`;
