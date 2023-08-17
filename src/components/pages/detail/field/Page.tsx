import { useParams } from "react-router-dom";
import { getAllField } from "../../../../hooks/field";
import { FieldProps } from "../../../../model/field";
import DetailContainer from "../DetailContainer";
import CommonTitle from "../../../ui/Title";
import FieldInfo from "./FieldInfo";

export default function FieldDetailPage() {
  const { allField } = getAllField();
  const { id } = useParams();
  const field = allField.find((field: FieldProps) => field.number === Number(id));

  console.log(field);

  return (
    <DetailContainer>
      <CommonTitle>구장 정보</CommonTitle>
      <FieldInfo field={field} />
    </DetailContainer>
  );
}
