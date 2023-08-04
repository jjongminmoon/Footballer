import styled from "@emotion/styled";
import Modal from "../ui/Modal";
import SearchInput from "./SearchInput";
import MenuBox from "./MenuBox";
import { Link } from "react-router-dom";
import { PiUserCircleLight, PiDotsThreeBold } from "react-icons/pi";
import { useContext, useState } from "react";
import Logo from "../ui/Logo";
import { AuthContext } from "../../context/AuthProvider";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const isUser = useContext(AuthContext);

  const stopBubbling = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Section>
      <Logo fontSize="24px" />
      <UserAction>
        <SearchInput />
        <Link to={isUser ? "/user" : "login"}>
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
