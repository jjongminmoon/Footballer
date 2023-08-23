import { FieldProps } from "./field";

export type MatchProps = {
  id: string;
  date: string;
  field: FieldProps;
  rule: string;
  participation: string[];
};
