import styled from "@emotion/styled";
import { getAllField } from "../../../hooks/field";
import { FieldProps } from "../../../model/field";
import { Link } from "react-router-dom";

export default function FieldList() {
  const { allField } = getAllField();

  return (
    <Container>
      {allField.map((field: FieldProps) => (
        <Link to={`/detail/field/${field.number}`}>
          <Row>
            <Image>
              <img src={field.image[0]} alt={`${field.id} 이미지`} />
            </Image>
            <p>
              {field.id} ({field.size})
            </p>

            <Parking>{field.parking ? "주차 가능" : "주차 불가"}</Parking>
          </Row>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid var(--main-gray);
  margin-top: 20px;
  height: 100vh;
  overflow: scroll;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid var(--main-gray);
`;

const Image = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Parking = styled.p`
  text-align: center;
  padding: 10px;
  margin-left: auto;
  background-color: var(--main-button);
  color: white;
  font-size: 13px;
`;
