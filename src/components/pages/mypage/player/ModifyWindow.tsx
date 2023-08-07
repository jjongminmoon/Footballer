import styled from "@emotion/styled";
import Modal from "../../../ui/Modal";

type Props = {
  children: React.ReactNode;
};

export default function ModifyWindow({ children }: Props) {
  return (
    <Modal>
      <Center>
        <Revision>{children}</Revision>
      </Center>
    </Modal>
  );
}

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Revision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 30%;
  height: 25%;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
`;
