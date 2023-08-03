import styled from "@emotion/styled";
import { GiSoccerKick, GiBlackFlag, GiLaurelsTrophy } from "react-icons/gi";
import { FaChildReaching } from "react-icons/fa6";
import { TbSoccerField } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {
  stopBubbling: (e: React.MouseEvent<HTMLElement>) => void;
  className: string;
};

const MenuList = [
  { icon: <GiSoccerKick className="logo" />, name: "풋볼러 소개", pathname: "/introduce" },
  { icon: <GiBlackFlag />, name: "클럽", pathname: "/club" },
  { icon: <FaChildReaching />, name: "풋볼러", pathname: "/player" },
  { icon: <TbSoccerField />, name: "구장", pathname: "/field" },
  { icon: <GiLaurelsTrophy />, name: "풋볼러컵 대회", pathname: "/footballercup" },
  { icon: <RiCustomerServiceFill />, name: "고객센터", pathname: "/" }
];

export default function MenuBox({ stopBubbling, className }: Props) {
  return (
    <Container onClick={stopBubbling} className={className}>
      <ul>
        {MenuList.map(({ icon, name, pathname }) => (
          <li key={pathname}>
            {icon}
            <Link to={pathname}>{name}</Link>
          </li>
        ))}
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
