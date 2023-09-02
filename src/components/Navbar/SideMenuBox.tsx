import styled from "@emotion/styled";
import { GiSoccerKick, GiLaurelsTrophy, GiArchiveRegister } from "react-icons/gi";
import { TbSoccerField } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BiSolidExit, BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../service/firebase";
import { getUser } from "../../hooks/user";
import { SetStateAction } from "react";

type Props = {
  stopBubbling: (e: React.MouseEvent<HTMLElement>) => void;
  className: string;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
};

const MenuList = [
  { icon: <GiSoccerKick className="logo" />, name: "풋볼러 소개", pathname: "/introduce" },
  { icon: <GiArchiveRegister />, name: "팀 등록", pathname: "/register/team" },
  { icon: <BiSearch />, name: "팀/선수 찾기", pathname: "/search" },
  { icon: <GiLaurelsTrophy />, name: "풋볼러컵 대회", pathname: "/footballercup" },
  { icon: <TbSoccerField />, name: "구장", pathname: "/field" },
  { icon: <RiCustomerServiceFill />, name: "고객센터", pathname: "/cs" }
];

export default function SideMenuBox({ stopBubbling, className, setOpenModal }: Props) {
  const { userData } = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    alert("정상적으로 로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <Container onClick={stopBubbling} className={className}>
      <ul>
        {MenuList.map(({ icon, name, pathname }) => (
          <li key={pathname} onClick={() => setOpenModal(false)}>
            {icon}
            <Link to={pathname}>{name}</Link>
          </li>
        ))}
        {userData && (
          <Logout onClick={handleLogout}>
            <BiSolidExit />
            <p>로그아웃</p>
          </Logout>
        )}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  padding: 30px;
  bottom: 0;
  width: 320px;
  height: 100%;
  padding: 30px;
  background-color: white;
  z-index: 999;
  transition: 0.5s;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    font-size: 22px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      font-size: 30px;
    }

    .logo {
      color: red;
    }
  }
`;

const Logout = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;

  svg {
    font-size: 30px;
    padding-bottom: 4px;
  }
`;
