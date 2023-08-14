import styled from "@emotion/styled";

export default function MypageTitle({ children }: { children: React.ReactNode }) {
  return <Title>{children}</Title>;
}

const Title = styled.h1`
  font-size: 26px;
  padding-bottom: 20px;
  margin-top: 30px;
  border-bottom: 2px solid black;
`;
