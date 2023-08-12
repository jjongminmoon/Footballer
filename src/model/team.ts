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
  member: [];
  status: boolean;
  applicationList: [];
  scoutList: [];
  introduce: string;
  goodTeam: [];
  manner: [];
  footballerCup: [];
};
