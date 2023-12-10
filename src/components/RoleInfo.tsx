interface RoleInfoProps {
  name: string;
  age: number;
  gender: string;
  job: string;
  characters: string[];
  advantage: string[];
  disadvantage: string[];
  preference: string[];
  values: string[];
  related_timesteps: number[];
  otherInformation: string;
}

const RoleInfo = (props: RoleInfoProps) => {
  return (
    <>RoleInfo</>
  )
}

export default RoleInfo;