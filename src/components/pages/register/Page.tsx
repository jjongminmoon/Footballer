import styled from "@emotion/styled";
import { useState } from "react";

export default function RegisterPage() {
  const [input, setInput] = useState({
    name: "",
    age: 0,
    region: "",
    level: ""
  });
  const [image, setImage] = useState("");
  const [position, setPosition] = useState([]);

  return (
    <Section>
      <h1>선수등록</h1>
    </Section>
  );
}

const Section = styled.section``;

const ImagePreview = styled.img``;

const Input = styled.input``;
