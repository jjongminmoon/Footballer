import styled from "@emotion/styled";
import Logo from "./Logo";

export default function Loading() {
  return (
    <Wrapper>
      <Logo fontSize="40px">풋볼러</Logo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
`;
