import styled from "@emotion/styled";
import FieldCarousel from "./FieldCarousel";
import { FieldProps } from "../../../../model/field";
import Notice from "./Notice";

type Props = {
  field: FieldProps;
};

export default function FieldInfo({ field }: Props) {
  return (
    <Wrapper>
      <FieldCarousel images={field?.image} />
      <Info>
        <p>{field?.region}</p>
        <Name>{field?.id}</Name>
        <p>{field?.address}</p>
        <Notice field={field} />
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Info = styled.div`
  padding: 20px 10px;
  margin-top: 40px;
  border-top: 2px solid black;
`;

const Name = styled.h1`
  margin-top: 10px;
  font-weight: bold;
`;
