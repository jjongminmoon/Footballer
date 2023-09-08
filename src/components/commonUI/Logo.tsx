import styled from "@emotion/styled";
import LogoIcon from "./icon/LogoIcon";

type Props = {
  children: React.ReactNode;
  fontSize: string;
  color?: string;
};

export default function Logo({ children, fontSize, color }: Props) {
  return (
    <LogoBox fontSize={fontSize} color={color}>
      <p>{children}</p>
      <LogoIcon fontSize="20px" />
    </LogoBox>
  );
}

const LogoBox = styled.h1<{ fontSize: string; color?: string }>`
  display: flex;
  gap: 5px;
  font-family: "KBO-Dia-Gothic_bold";
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-style: italic;
`;
