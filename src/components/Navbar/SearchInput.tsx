import styled from "@emotion/styled";
import Modal from "../ui/Modal";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiX } from "react-icons/bi";

export default function SearchInput() {
  const [openModal, setOpenModal] = useState(false);
  // const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <OpenSearchBox onClick={() => setOpenModal(true)}>
        <Icon />
        <p>팀명, 선수명으로 찾기</p>
      </OpenSearchBox>

      {openModal && (
        <Modal>
          <SearchBox>
            <ExitIcon onClick={() => setOpenModal(false)} />
            <Input type="text" placeholder="팀명, 선수명을 입력해주세요" />
            <SearchResult>{<SearchItem>문종민</SearchItem>}</SearchResult>
          </SearchBox>
        </Modal>
      )}
    </>
  );
}

const OpenSearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f5f5f5;
  min-width: 300px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  font-size: 13px;
  color: gray;
  cursor: pointer;
`;

const Icon = styled(AiOutlineSearch)`
  font-size: 20px;
  color: black;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
  padding-top: 30px;
  background-color: white;
`;

const ExitIcon = styled(BiX)`
  position: absolute;
  top: 24px;
  right: 100px;
  font-size: 50px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 450px;
  height: 40px;
  padding: 8px 16px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
`;

const SearchResult = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #ddd;
  width: 450px;
  height: 100%;
  margin: 10px 0;
`;

const SearchItem = styled.li`
  padding: 5px;
`;
