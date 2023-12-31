import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { BsPersonBoundingBox } from "react-icons/bs";

type Props = {
  image: any;
  setImage: React.Dispatch<SetStateAction<any>>;
};

export default function ImageCard({ image, setImage }: Props) {
  //
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

  return (
    <ImageBox>
      <input type="file" id="file-input" accept="image/*" onChange={uploadImage} />
      {image ? (
        <label htmlFor="file-input">
          <Image>
            <ImagePreview src={image} />
          </Image>
        </label>
      ) : (
        <NoImage>
          <label htmlFor="file-input">
            <UploadIcon />
          </label>
        </NoImage>
      )}
    </ImageBox>
  );
}

const ImageBox = styled.div`
  width: 400px;
  height: 100%;

  #file-input {
    display: none;
  }
`;

const NoImage = styled.div`
  width: 400px;
  height: 550px;
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
  height: 550px;
  background-color: var(--main-light-gray);
  border: 3px solid var(--main-gray);
  border-radius: 10px;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
