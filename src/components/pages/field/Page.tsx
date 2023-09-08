import CommonBanner from "../../commonUI/CommonBanner";
import CommonTitle from "../../commonUI/Title";
import FieldList from "./FieldList";

export default function FieldListPage() {
  return (
    <section>
      <CommonBanner />
      <CommonTitle>구장 리스트</CommonTitle>
      <FieldList />
    </section>
  );
}
