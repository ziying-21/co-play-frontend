class RoleAgent {
  id: number;
  name: string;
  age: number;
  characteristics: string;
  preferences: string;
  otherInformation: string;

  constructor(
    id: number = 0,
    name: string = "", 
    age: number = 0, 
    characteristics: string = "", 
    preferences: string = "", 
    otherInformation: string = "no info",
  ) {
    this.id = id;
    this.name = name; 
    this.age = age; 
    this.characteristics = characteristics; 
    this.preferences = preferences; 
    this.otherInformation = otherInformation;
  }
};

export default RoleAgent;