import styled from "@emotion/styled";
import Notice from "./Notice";
import { FieldProps } from "../../../../model/field";
import { MapContainer } from "./MapContainer";

type Props = {
  field: FieldProps;
};

export default function FieldInfo({ field }: Props) {
  return (
    <>
      <Info>
        <p>{field?.region}</p>
        <Name>{field?.id}</Name>
        <p>{field?.address}</p>
      </Info>
      <Notice field={field} />
      <MapContainer address={field?.address} name={field?.id} />
    </>
  );
}

const Info = styled.div`
  padding: 20px 10px;
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
`;

const Name = styled.h1`
  margin: 10px 0;
  font-weight: bold;
`;
