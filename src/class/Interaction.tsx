import RoleAgent from "./RoleAgent";

class Interaction {
  interaction_id: number; 
  sender: RoleAgent;
  related_timestep_id: number;
  info: {
    "BEHAVIOR": string[], 
    "EXPRESSION": string[], 
    "SPEECH": string[], 
    "PSYCHOLOGICAL_ACTIVITY": string[]
  }
  constructor(
    interaction_id: number = 0,
    sender: RoleAgent = new RoleAgent(),
    related_timestep_id: number = 0,
    info: {
      "BEHAVIOR": string[], 
      "EXPRESSION": string[], 
      "SPEECH": string[], 
      "PSYCHOLOGICAL_ACTIVITY": string[]
    } = {
      "BEHAVIOR": [], 
      "EXPRESSION": [], 
      "SPEECH": [], 
      "PSYCHOLOGICAL_ACTIVITY": []
    }
  ) {
    this.interaction_id = interaction_id;
    this.sender = sender;
    this.related_timestep_id = related_timestep_id;
    this.info = info;
  }
}

export default Interaction;