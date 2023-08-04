import styled from "@emotion/styled";
import LogoIcon from "./icon/LogoIcon";

type Props = {
  fontSize: string;
};

export default function Logo({ fontSize }: Props) {
  return (
    <LogoBox fontSize={fontSize}>
      <p>풋볼러</p>
      <LogoIcon fontSize="20px" />
    </LogoBox>
  );
}

const LogoBox = styled.h1<{ fontSize: string }>`
  display: flex;
  gap: 5px;
  font-family: "KBO-Dia-Gothic_bold";
  font-size: ${(props) => props.fontSize};
  font-style: italic;
`;
