import RoleAgent from "./RoleAgent";

class Interaction {
  id: number; 
  role: RoleAgent;
  related_timestep_id: number;
  info: {
    "movement": string[], 
    "expression": string[], 
    "speech": string[], 
    "emotion": string[]
  }
  constructor(
    id: number = 0,
    role: RoleAgent = new RoleAgent(),
    related_timestep_id: number = 0,
    info: {
      "movement": string[], 
      "expression": string[], 
      "speech": string[], 
      "emotion": string[]
    } = {
      "movement": [], 
      "expression": [], 
      "speech": [], 
      "emotion": []
    }
  ) {
    this.id = id;
    this.role = role;
    this.related_timestep_id = related_timestep_id;
    this.info = info;
  }
}

export default Interaction;