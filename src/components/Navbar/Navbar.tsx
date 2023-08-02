import styled from "@emotion/styled";
import Modal from "../ui/Modal";
import SearchInput from "./SearchInput";
import MenuBox from "./MenuBox";
import { Link } from "react-router-dom";
import { GiSoccerKick } from "react-icons/gi";
import { PiUserCircleLight, PiDotsThreeBold } from "react-icons/pi";
import { useState } from "react";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  const stopBubbling = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Section>
      <Logo>
        <p>풋볼러</p>
        <LogoIcon />
      </Logo>
      <UserAction>
        <SearchInput />
        <Link to="/user">
          <UserIcon />
        </Link>
        <MenuIcon onClick={() => setOpenModal(true)} />
      </UserAction>
      <MenuBox stopBubbling={stopBubbling} className={openModal ? "opened" : "closed"} />
      {openModal && (
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

const Logo = styled.h1`
  display: flex;
  gap: 5px;
  font-family: "KBO-Dia-Gothic_bold";
  font-size: 24px;
  font-style: italic;
`;

const LogoIcon = styled(GiSoccerKick)`
  font-size: 20px;
  color: red;
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
  font-size: 32px;
`;

const MenuIcon = styled(PiDotsThreeBold)`
  font-size: 32px;
`;
