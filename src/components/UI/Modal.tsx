import styled from "@emotion/styled";

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
};

export default function Modal({ onClose, children }: Props) {
  return <ModalContainer onClick={onClose}>{children}</ModalContainer>;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
