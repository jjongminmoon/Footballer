import styled from "@emotion/styled";
import { GiSoccerKick } from "react-icons/gi";

export default function LogoIcon({ fontSize }: { fontSize: string }) {
  return <Icon fontSize={fontSize} />;
}

const Icon = styled(GiSoccerKick)<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: red;
`;
