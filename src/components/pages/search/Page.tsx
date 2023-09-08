import styled from "@emotion/styled";
import CommonBanner from "../../commonUI/CommonBanner";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../../hooks/user";

const categoryList = [
  { name: "팀 찾기", pathname: "/search/team" },
  { name: "선수 찾기", pathname: "/search/player" }
];

export default function SearchPage() {
  const { userData } = getUser();
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userData === undefined) {
      alert("선수 정보가 등록되어 있지 않아 팀/선수 찾기 권한이 없습니다.");
      navigate("/register/player");
    }
  });

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
