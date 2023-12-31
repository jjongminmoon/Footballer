import { ScoreProps } from "./user";

export type TeamProps = {
  id: string;
  number: number;
  logo: string;
  owner: {
    name: string;
    email: string;
  };
  name: string;
  region: string;
  fee: number;
  introduce: string;
  member: string[];
  status: boolean;
  applicationList: string[];
  scoutList: string[];
  levelScore: ScoreProps[];
  mannerScore: ScoreProps[];
  footballerCup: [];
  history: string[];
};
