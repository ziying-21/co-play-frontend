class Interaction {
  id: number; 
  related_timestep_id: number;
  type: "movement" | "expression" | "emotion" | "speech";
  description: string;
  constructor(
    id: number = 0,
    related_timestep_id: number = 0,
    type: "movement" | "expression" | "emotion" | "speech" = "movement",
    description: string = ""
  ) {
    this.id = id;
    this.related_timestep_id = related_timestep_id;
    this.type = type;
    this.description = description;
  }
}

export default Interaction;