import styled from "@emotion/styled";
import TrophyImage from "./TrophyImage";
import Notice from "./Notice";
import ParticipationList from "./ParticipationList";
import ParticipationButton from "./ParticipationButton";

export default function FootballercupPage() {
  return (
    <section>
      <Notice />
      <Container>
        <TrophyImage />
        <ParticipationList />
        <ParticipationButton />
      </Container>
    </section>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid var(--main-gray);
  border-radius: 10px;
`;
