import styled from "@emotion/styled";
import MypageContainer from "../MypageContainer";
import { getAuthData } from "../../../../hooks/user";
import MypageTitle from "../MypageTitle";

export default function UserPage() {
  const { authData } = getAuthData();

  const infoList = [
    { title: "고유 아이디", data: authData?.uid },
    { title: "이메일", data: authData?.email },
    { title: "계정 생성 일시", data: authData?.metadata.creationTime },
    {
      title: "가입 경로",
      data: authData?.providerData[0].providerId === "password" ? "풋볼러" : "구글"
    }
  ];

  return (
    <MypageContainer>
      <MypageTitle>유저 정보</MypageTitle>
      {infoList.map(({ title, data }) => (
        <Row key={title}>
          <span>{title}</span>
          <div>{data}</div>
        </Row>
      ))}
    </MypageContainer>
  );
}

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
