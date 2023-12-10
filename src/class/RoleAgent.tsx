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

  constructor() {
    this.name = "";
    this.age = 0;
    this.gender = "";
    this.job = "";
    this.characters = [];
    this.advantage = [];
    this.disadvantage = [];
    this.preference = [];
    this.values = [];
    this.related_timesteps = [];
    this.otherInformation = "";
  }
};

export default RoleAgent;