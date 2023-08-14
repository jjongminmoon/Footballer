import styled from "@emotion/styled";
import CommonTitle from "../../../ui/Title";

export default function PlayerDetailPage() {
  return (
    <section>
      <Container>
        <CommonTitle>선수 상세 페이지</CommonTitle>
      </Container>
    </section>
  );
}

const Container = styled.div`
  padding: 10px;
  background-color: main(--main-gray);
`;
