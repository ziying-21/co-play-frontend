class RoleAgent {
  id: number;
  name: string;
  age: number;
  characteristics: string[];
  preferences: string[];
  otherInformation: string[];
  story_id: number;

  constructor(
    id: number = 0,
    name: string = "", 
    age: number = 0, 
    characteristics: string[] = [], 
    preferences: string[] = [], 
    otherInformation: string[] = [],
    story_id: number = 0
  ) {
    this.id = id;
    this.name = name; 
    this.age = age; 
    this.characteristics = characteristics; 
    this.preferences = preferences; 
    this.otherInformation = otherInformation;
    this.story_id = story_id;
  }
};

export default RoleAgent;