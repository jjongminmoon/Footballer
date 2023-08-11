import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { MdAssistantPhoto } from "react-icons/md";

type Props = {
  logo: any;
  setLogo: React.Dispatch<SetStateAction<any>>;
};

export default function LogoImage({ logo, setLogo }: Props) {
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setLogo(reader.result || null);
        resolve();
      };
    });
  };

  return (
    <ImageBox>
      <input type="file" id="file-input" accept="image/*" multiple onChange={uploadImage} />
      {logo ? (
        <label htmlFor="file-input">
          <Image>
            <ImagePreview src={logo} />
          </Image>
        </label>
      ) : (
        <NoImage>
          <label htmlFor="file-input">
            <UploadIcon />
          </label>
        </NoImage>
      )}
      <h3>팀 로고</h3>
    </ImageBox>
  );
}

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 20px;
`;

const NoImage = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid var(--main-gray);
  border-radius: 999px;
  cursor-pointer;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const UploadIcon = styled(MdAssistantPhoto)`
  font-size: 60px;
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid var(--main-gray);
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;

  object-fit: scale-down;
`;
