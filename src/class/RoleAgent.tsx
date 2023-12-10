class RoleAgent {
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

  constructor(
    name: string = "", 
    age: number = 0, 
    gender: string = "male", 
    job: string = "teacher", 
    characters: string[] = [], 
    advantage: string[] = [], 
    disadvantage: string[] = [], 
    preference: string[] = [], 
    values: string[] = [], 
    related_timesteps: number[] = [], 
    otherInformation: string = "no info",
  ) {
    this.name = name; this.age = age; this.gender = gender; this.job = job;
    this.characters = characters; this.advantage = advantage;
    this.disadvantage = disadvantage;
    this.preference = preference; this.values = values;
    this.related_timesteps = related_timesteps;
    this.otherInformation = otherInformation;
  }
};

export default RoleAgent;