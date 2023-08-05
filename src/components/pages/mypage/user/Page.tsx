import styled from "@emotion/styled";
import MypageContainer from "../../../ui/MypageContainer";
import { getAuthData } from "../../../../hooks/user";

export default function UserPage() {
  const { authData } = getAuthData();

  const infoList = [
    { title: "고유 아이디", data: authData?.uid },
    { title: "이메일", data: authData?.email },
    { title: "계정 생성 일시", data: authData?.metadata.creationTime },
    { title: "계정 가입 경로", data: authData?.providerData[0].providerId }
  ];

  return (
    <MypageContainer>
      <h1>유저 정보</h1>
      <LoginInfo>
        <h3>로그인 정보</h3>
        {infoList.map(({ title, data }) => (
          <Row>
            <span>{title}</span>
            <div>{data}</div>
          </Row>
        ))}
      </LoginInfo>
    </MypageContainer>
  );
}

const LoginInfo = styled.div`
  margin-top: 30px;

  h3 {
    padding-bottom: 10px;
    border-bottom: 2px solid black;
  }
`;

const Row = styled.div`
  display: flex;
  align-itesm: center;
  gap: 20px;
  font-size: 14px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  span {
    width: 150px;
    font-weight: bold;
  }
`;
