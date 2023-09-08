import styled from "@emotion/styled";
import ChangeImage from "./ChangeImage";
import { getUser } from "../../../hooks/user";
import { useState } from "react";

export default function NameCard() {
  const { userData } = getUser();
  const [openChangeImage, setOpenChangeImage] = useState(false);

  return (
    <>
      <Container>
        <Image onClick={() => setOpenChangeImage(true)}>
          <img src={userData?.image} alt="유저 대표 이미지" />
        </Image>
        <p>{userData?.name}</p>
      </Container>

      {openChangeImage && <ChangeImage setOpenChangeImage={setOpenChangeImage} />}
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 150px;
  border: 1px solid var(--main-gray);
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
`;

const Image = styled.label`
  width: 100px;
  height: 100px;
  margin-left: 30px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 999px;
  }
`;
