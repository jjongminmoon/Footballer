import styled from "@emotion/styled";

type Props = {
  data: string[];
};

export default function HistoryList({ data }: Props) {
  return (
    <>
      <Count>총 개수 : {data?.length}개</Count>
      <List>
        {data?.map((history, index) => (
          <Row key={index}>📢 {history}</Row>
        ))}
      </List>
    </>
  );
}

const Count = styled.p`
  margin: 20px 0;
`;

const List = styled.div`
  max-height: 300px;
  border: 1px solid var(--main-gray);
  overflow-y: scroll;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--main-gray);
  height: 30px;
  padding: 10px;
  font-size: 13px;

  :last-child {
    border-bottom: none;
  }
`;
