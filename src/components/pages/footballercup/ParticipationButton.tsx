import styled from "@emotion/styled";
import { getMyTeam } from "../../../hooks/team";
import { getFooballercup } from "../../../hooks/match";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dbService } from "../../../service/firebase";
import { getUser } from "../../../hooks/user";

export default function ParticipationButton() {
  const { userData } = getUser();
  const { teamData } = getMyTeam();
  const { footballercup } = getFooballercup();

  const handleParticipation = () => {
    const cupDocRef = doc(dbService, "footballercup", footballercup.id);
    const teamDocRef = doc(dbService, "team", teamData.id);

    if (userData.name === teamData.owner.name) {
      if (confirm(`${footballercup.date} 날짜의 풋볼러컵에 참가하시겠습니까?`)) {
        updateDoc(cupDocRef, {
          participant: arrayUnion({
            id: teamData.id,
            logo: teamData.logo,
            name: teamData.name
          })
        });

        updateDoc(teamDocRef, {
          history: arrayUnion(`${footballercup.date} 날짜의 풋볼러컵에 참가 신청했습니다.`)
        });

        alert("풋볼러컵 신청이 완료되었습니다.");
      } else {
        return;
      }
    } else {
      alert("풋볼러컵 신청 권한은 구단주에게만 있습니다.");
    }
  };

  return <Button onClick={handleParticipation}>참가 신청</Button>;
}

const Button = styled.button`
  height: 40px;
  padding: 10px;
  margin: 20px 0;
  background-color: var(--main-button);
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 20px;
`;
