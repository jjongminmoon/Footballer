import { FieldProps } from "./field";

export type MatchProps = {
  id: string;
  date: string;
  field: FieldProps;
  rule: string;
  participation: ParticipationProps[];
};

export type ParticipationProps = {
  id: string;
  logo: string;
  name: string;
};

export type FootballercupProps = {
  id: string;
  date: string;
  participant: ParticipationProps[];
};
