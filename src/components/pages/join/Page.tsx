import styled from "@emotion/styled";
import JoinForm from "./JoinForm";
import Logo from "../../ui/Logo";

export default function JoinPage() {
  return (
    <Section>
      <Logo fontSize="40px">회원가입</Logo>
      <JoinForm />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 120px 0;
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: "KBO-Dia-Gothic_bold";
  font-style: italic;
`;
