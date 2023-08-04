import styled from "@emotion/styled";
import { FcGoogle } from "react-icons/fc";
import { getAllUser } from "../../../hooks/user";
import { UserProps } from "../../../model/user";
import { loginGoogle } from "../../../service/firebase";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const { allUser } = getAllUser();
  const existingUser = allUser.map((user: UserProps) => user.email);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await loginGoogle()
      .then(async (result) => {
        const user = result.user;

        if (existingUser.includes(user.email)) {
          alert("정상적으로 로그인 되었습니다.");
          navigate("/");
        } else {
          alert("회원가입이 완료되었습니다. 풋볼러 이용을 위해 선수 정보를 등록해주세요.");
          navigate("/register");
        }
      })
      .catch((e) => alert(e));
  };

  return (
    <Button onClick={handleGoogleLogin}>
      <FcGoogle />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 999px;
  background-color: var(--main-gray);

  svg {
    font-size: 24px;
  }
`;
