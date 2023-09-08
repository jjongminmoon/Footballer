import styled from "@emotion/styled";
import CheckedJoin from "./CheckedJoin";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../service/firebase";
import { useNavigate } from "react-router-dom";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRepwd] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "pwd") {
      setPwd(e.target.value);
    } else if (type === "pwd2") {
      setRepwd(e.target.value);
    }
  };

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd === repwd) {
      await createUserWithEmailAndPassword(auth, email, pwd)
        .then(() => {
          alert("회원가입이 완료되었습니다. 풋볼러 이용을 위해 선수 정보를 등록해주세요.");
          navigate("/register/player");
        })
        .catch((e) => alert(e));
    } else if (pwd !== repwd) {
      alert("비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요.");
      return;
    }
  };

  return (
    <>
      <Form onSubmit={handleJoin}>
        <h3>아이디(이메일)</h3>
        <Input
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={handleInput}
          autoComplete="off"
        />
        <h3>비밀번호</h3>
        <Input
          name="pwd"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={pwd}
          onChange={handleInput}
        />
        <Input
          name="pwd2"
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          value={repwd}
          onChange={handleInput}
        />
        <CheckedJoin
          checked={checked}
          setChecked={setChecked}
          checked2={checked2}
          setChecked2={setChecked2}
        />
        <Button
          backgroundColor={checked && checked2 ? "var(--main-red)" : "var(--main-gray)"}
          disabled={checked && checked2 ? false : true}
        >
          회원가입
        </Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 420px;

  h3 {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border: 2px solid var(--main-gray);
  border-radius: 8px;
`;

const Button = styled.button<{ backgroundColor: string }>`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.backgroundColor};
  margin-top: 20px;
`;
