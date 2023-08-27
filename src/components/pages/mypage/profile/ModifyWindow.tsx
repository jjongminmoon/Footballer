import styled from "@emotion/styled";
import Modal from "../../../ui/Modal";

type Props = {
  children: React.ReactNode;
};

export default function ModifyWindow({ children }: Props) {
  return (
    <Modal>
      <Container>{children}</Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 30%;
  height: 25%;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
`;
