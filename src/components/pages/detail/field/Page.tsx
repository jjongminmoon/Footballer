import DetailContainer from "../DetailContainer";
import CommonTitle from "../../../ui/Title";
import FieldImageCarousel from "./FieldImageCarousel";
import FieldInfo from "./FieldInfo";
import { useParams } from "react-router-dom";
import { getAllField } from "../../../../hooks/field";
import { FieldProps } from "../../../../model/field";

export default function FieldDetailPage() {
  const { id } = useParams();
  const { allField } = getAllField();
  const field = allField.find((field: FieldProps) => field.number === Number(id));

  return (
    <DetailContainer>
      <CommonTitle>구장 정보</CommonTitle>
      <FieldImageCarousel images={field?.image} />
      <FieldInfo field={field} />
    </DetailContainer>
  );
}
