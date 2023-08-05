import styled from "@emotion/styled";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "id") {
      setEmail(e.target.value);
    } else {
      setPwd(e.target.value);
    }
  };

  return (
    <Form>
      <Input
        name="id"
        type="text"
        placeholder="아이디(이메일)"
        value={email}
        autoComplete="off"
        required
        onChange={handleInput}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={pwd}
        autoComplete="off"
        required
        onChange={handleInput}
      />
      <Button>로그인</Button>
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 350px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 2px solid var(--main-gray);
  border-radius: 8px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 6px;
  background-color: var(--main-red);
`;
