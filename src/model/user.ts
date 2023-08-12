export type UserProps = {
  id: string;
  email: string;
  image: string;
  birth: string;
  name: string;
  position: [];
  region: string;
  level: string;
  manner: [];
  goodPlayer: [];
  team: string;
  apply: [
    {
      id: string;
      status: string;
    }
  ];
  scouted: [];
};
