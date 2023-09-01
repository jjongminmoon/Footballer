import styled from "@emotion/styled";
import { getFooballercup } from "../../../hooks/match";
import { ParticipationProps } from "../../../model/match";
import Logo from "../../ui/Logo";

const emptyList = [
  { id: 1, text: "미정" },
  { id: 2, text: "미정" },
  { id: 3, text: "미정" },
  { id: 4, text: "미정" },
  { id: 5, text: "미정" },
  { id: 6, text: "미정" },
  { id: 7, text: "미정" },
  { id: 8, text: "미정" }
];

export default function ParticipationList() {
  const { footballercup } = getFooballercup();

  return (
    <>
      <Date>
        <Logo fontSize="16px">풋볼러컵</Logo>
        {footballercup.date}
      </Date>
      <Container>
        {footballercup.participant?.map((participant: ParticipationProps) => (
          <Participant key={participant.id}>
            <Image>
              <img src={participant.logo} alt={`${participant.name} 팀 로고 이미지`} />
            </Image>
            <p>{participant.name}</p>
          </Participant>
        ))}
        {emptyList
          .filter((list) => list.id - footballercup.participant?.length > 0)
          .map((list) => (
            <Participant key={list.id}>
              <p>{list.text}</p>
            </Participant>
          ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Participant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 10px;
  width: 105px;
  height: 150px;
  background-color: var(--main-light-gray);
  font-size: 14px;
  border-radius: 10px;
`;

const Image = styled.div`
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`;
