import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export default function MypageContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  padding: 40px 20px 20px 20px;
`;
