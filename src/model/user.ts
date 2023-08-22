export type UserProps = {
  number: number;
  id: string;
  email: string;
  image: string;
  name: string;
  height: number;
  weight: number;
  birth: string;
  position: string;
  region: string;
  level: string;
  manner: [ScoreProps];
  goodPlayer: [ScoreProps];
  team: string;
  apply: {
    id: string;
    status: string;
  };
  scouted: [];
};

export type ScoreProps = {
  id: string;
  name: string;
  score: number;
};
