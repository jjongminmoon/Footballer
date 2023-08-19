import { FieldProps } from "./field";
import { TeamProps } from "./team";

export type MatchesProps = {
  id: string;
  date: string;
  field: FieldProps;
  rule: string;
  participation: [TeamProps];
};
