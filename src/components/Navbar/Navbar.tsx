import styled from "@emotion/styled";
import Modal from "../ui/Modal";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { PiUserCircleLight, PiDotsThreeBold } from "react-icons/pi";
import { useState } from "react";
import Logo from "../ui/Logo";
import SideMenuBox from "./SideMenuBox";
import { getUser } from "../../hooks/user";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const { userData } = getUser();

  const stopBubbling = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Section>
      <Link to="/">
        <Logo fontSize="24px">풋볼러</Logo>
      </Link>
      <UserAction>
        <SearchInput />
        <Link to={userData ? "/mypage/user" : "login"}>
          <UserIcon />
        </Link>
        <MenuIcon onClick={() => setOpenModal(true)} />
      </UserAction>
      {userData && (
        <SideMenuBox stopBubbling={stopBubbling} className={openModal ? "opened" : "closed"} />
      )}
      {userData && openModal && (
        <>
          <Modal
            onClose={() => {
              setOpenModal(false);
            }}
          />
        </>
      )}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  .closed {
    right: -320px;
  }

  .opened {
    right: 0;
  }
`;

const UserAction = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    display: none;
  }
`;

const UserIcon = styled(PiUserCircleLight)`
  display: flex;
  align-items: center;
  font-size: 32px;
`;

const MenuIcon = styled(PiDotsThreeBold)`
  font-size: 32px;
`;
