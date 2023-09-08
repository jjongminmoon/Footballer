import styled from "@emotion/styled";
import Logo from "../../commonUI/Logo";
import LoginForm from "./LoginForm";
import GoogleLogin from "./GoogleLogin";
import ActionBar from "./ActionBar";

export default function LoginPage() {
  return (
    <Section>
      <Logo fontSize="40px">로그인</Logo>
      <LoginForm />
      <ActionBar />
      <GoogleLogin />
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
