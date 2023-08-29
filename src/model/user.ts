export type UserProps = {
  id: string;
  number: number;
  email: string;
  image: string;
  name: string;
  height: number;
  weight: number;
  birth: string;
  position: string;
  region: string;
  level: string;
  team: string[];
  levelScore: ScoreProps[];
  mannerScore: ScoreProps[];
  apply: string[];
  scouted: string[];
  review: [];
  history: string[];
};

export type ScoreProps = {
  id: string;
  name: string;
  score: number;
};
