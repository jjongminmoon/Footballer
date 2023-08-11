import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";
import CommonBanner from "../../ui/CommonBanner";

export default function SearchPage() {
  return (
    <section>
      <CommonBanner />
      <Category>
        <Link to="/search/team">팀 찾기</Link>
        <Link to="/search/player">선수 찾기</Link>
      </Category>
      <SearchResult>
        <Outlet />
      </SearchResult>
    </section>
  );
}

const Category = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-align: center;
    width: 100px;
    padding: 10px;
    background-color: var(--main-light-gray);
    border: 1px solid var(--main-gray);
    border-radius: 10px;
  }
`;

const SearchResult = styled.div`
  max-height: 450px;
  margin-top: 20px;
  overflow: scroll;
  border: 2px solid var(--main-gray);
`;
