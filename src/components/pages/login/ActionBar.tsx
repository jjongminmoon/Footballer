import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function ActionBar() {
  return (
    <Container>
      <Link to="/join">회원가입</Link>
      <span className="line">|</span>
      <span className="find-password">비밀번호 찾기</span>
    </Container>
  );
}

const Container = styled.div`
  font-size: 13px;

  .line {
    margin: 0 10px;
  }

  .find-password {
    cursor: pointer;
  }
`;
