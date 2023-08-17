import CommonBanner from "../../ui/CommonBanner";
import CommonTitle from "../../ui/Title";
import FieldList from "./FieldList";

export default function FieldInfoPage() {
  return (
    <section>
      <CommonBanner />
      <CommonTitle>구장 리스트</CommonTitle>
      <FieldList />
    </section>
  );
}
