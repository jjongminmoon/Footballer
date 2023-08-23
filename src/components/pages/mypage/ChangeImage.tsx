import styled from "@emotion/styled";
import Modal from "../../ui/Modal";
import { SetStateAction, useState } from "react";
import { BsPersonBoundingBox } from "react-icons/bs";
import { getUser } from "../../../hooks/user";
import { doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../service/firebase";

type Props = {
  setOpenChangeImage: React.Dispatch<SetStateAction<boolean>>;
};

export default function ChangeImage({ setOpenChangeImage }: Props) {
  const { userData } = getUser();
  const [image, setImage] = useState<any>("");

  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImage(reader.result || null);
        resolve();
      };
    });
  };

  const changeImage = () => {
    const docRef = doc(dbService, "user", userData.id);
    updateDoc(docRef, {
      image: image
    })
      .then(() => {
        alert("프로필 사진을 변경했습니다.");
        setOpenChangeImage(false);
      })
      .catch((e) => alert(e));
  };

  return (
    <Modal>
      <Container>
        <ImageBox>
          <input type="file" id="file-input" accept="image/*" onChange={uploadImage} />
          {image ? (
            <Image>
              <ImagePreview src={image} />
            </Image>
          ) : (
            <NoImage>
              <label htmlFor="file-input">
                <UploadIcon />
              </label>
            </NoImage>
          )}
        </ImageBox>
        <ButtonBox>
          <Button onClick={changeImage}>변경</Button>
          <Button onClick={() => setOpenChangeImage(false)}>취소</Button>
        </ButtonBox>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 450px;
  height: 580px;
  background-color: white;
`;

const ImageBox = styled.div`
  width: 400px;
  height: 500px;

  #file-input {
    display: none;
  }
`;

const NoImage = styled.div`
  width: 400px;
  height: 500px;
  border: 3px solid var(--main-gray);
  border-radius: 10px;
  cursor-pointer;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const UploadIcon = styled(BsPersonBoundingBox)`
  font-size: 60px;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
  height: 500px;
  background-color: var(--main-light-gray);
  border: 3px solid var(--main-gray);
  border-radius: 10px;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: var(--main-button);
  color: white;
`;
