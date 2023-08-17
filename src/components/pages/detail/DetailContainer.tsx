import styled from "@emotion/styled";

export default function DetailContainer({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
}

const Container = styled.div`
  padding: 20px 30px 30px 30px;
  margin-top: 20px;
  background-color: var(--main-light-gray);
  border-radius: 10px;
`;
