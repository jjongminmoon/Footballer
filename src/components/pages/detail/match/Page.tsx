import styled from "@emotion/styled";
import DetailContainer from "../DetailContainer";
import CommonTitle from "../../../ui/Title";
import FieldImageCarousel from "../field/FieldImageCarousel";
import getAllMatches from "../../../../hooks/match";
import MatchInfo from "./MatchInfo";
import Notice from "../field/Notice";
import TeamInfo from "./TeamInfo";
import RuleInfo from "./RuleInfo";
import { useParams } from "react-router-dom";
import { MatchProps } from "../../../../model/match";

export default function MatchDetailPage() {
  const { id } = useParams();
  const { allMatch } = getAllMatches();
  const match: MatchProps = allMatch.find((match: MatchProps) => match.id === id);

  return (
    <DetailContainer>
      <CommonTitle>매치 정보</CommonTitle>
      <FieldImageCarousel images={match?.field.image} />
      <Container>
        <Wrapper>
          <Notice field={match?.field} />
          <TeamInfo teams={match?.participation} />
          <RuleInfo />
        </Wrapper>
        <MatchInfo match={match} />
      </Container>
    </DetailContainer>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
`;
