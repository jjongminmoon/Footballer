import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerServicePage() {
  const navigate = useNavigate();

  useEffect(() => {
    alert("서비스 준비중입니다. 메인페이지로 이동합니다.");
    navigate("/");
  });

  return <section></section>;
}
