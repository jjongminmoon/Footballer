import styled from "@emotion/styled";
import Modal from "../ui/Modal";
import useDebounce from "../../hooks/debounce";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { getAllUser } from "../../hooks/user";
import { getAllTeam } from "../../hooks/team";
import { Link } from "react-router-dom";

export default function SearchInput() {
  const { allUser } = getAllUser();
  const { allTeam } = getAllTeam();
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<any>([]);
  const debounceValue = useDebounce(searchValue);

  useEffect(() => {
    if (debounceValue === "") {
      setSearchResult([]);
    } else {
      setSearchResult(
        (category ? allUser : allTeam)?.filter((data: any) => data.name.includes(debounceValue))
      );
    }
  }, [debounceValue]);

  return (
    <>
      <OpenSearchBox onClick={() => setOpenModal(true)}>
        <Icon />
        <p>팀명, 선수명으로 찾기</p>
      </OpenSearchBox>

      {openModal && (
        <Modal>
          <Container>
            <SearchBox>
              <ExitIcon onClick={() => setOpenModal(false)} />
              <Category>
                <Item
                  backgroundColor={category ? "var(--main-red)" : "var(--main-gray)"}
                  onClick={() => setCategory(true)}
                >
                  선수
                </Item>
                <Item
                  backgroundColor={category ? "var(--main-gray)" : "var(--main-red)"}
                  onClick={() => setCategory(false)}
                >
                  팀
                </Item>
              </Category>
              <Input
                type="text"
                placeholder={category ? "선수명을 입력해주세요." : "팀명을 입력해주세요."}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <SearchResult>
                {searchResult?.map((result: any) => (
                  <Link
                    to={
                      category ? `/detail/player/${result.number}` : `/detail/team/${result.number}`
                    }
                    key={result.id}
                    onClick={() => setOpenModal(false)}
                  >
                    <ResultItem>
                      <img src={category ? result.image : result.logo} />
                      <p>{result.name}</p>

                      <RegionAndTeam>
                        {result.region} (
                        {category
                          ? result.team[result.team.length - 1]
                          : `인원: ${result?.member.length}명`}
                        )
                      </RegionAndTeam>
                    </ResultItem>
                  </Link>
                ))}
              </SearchResult>
            </SearchBox>
          </Container>
        </Modal>
      )}
    </>
  );
}

const OpenSearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--main-light-gray);
  min-width: 300px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  font-size: 12px;
  color: gray;
  cursor: pointer;
`;

const Icon = styled(AiOutlineSearch)`
  font-size: 20px;
  color: black;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: white;
`;

const SearchBox = styled.div`
  width: 500px;
`;

const ExitIcon = styled(BiX)`
  position: absolute;
  top: 24px;
  right: 100px;
  font-size: 50px;
  cursor: pointer;
`;

const Category = styled.div`
  display: flex;
  gap: 5px;
  font-size: 13px;
  margin-bottom: 10px;
`;

const Item = styled.p<{ backgroundColor: string }>`
  text-align: center;
  width: 50px;
  padding: 5px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background-color: var(--main-light-gray);
  border: none;
  border-radius: 8px;
`;

const SearchResult = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #ddd;
  padding: 10px 0 10px 10px;
  margin-top: 10px;
  overflow: scroll;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid var(--main-gray);

  img {
    width: 80px;
    height: 80px;
  }
`;

const RegionAndTeam = styled.p`
  margin-left: auto;
  padding: 5px 10px;
  font-size: 12px;
  background-color: black;
  color: white;
  border-radius: 999px;
`;
