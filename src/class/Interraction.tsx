import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";

class Interraction {
  type: "movement" | "expression" | "emotion" | "speech";
  description: string;
  constructor(
    type: "movement" | "expression" | "emotion" | "speech" = "movement",
    description: string = ""
  ) {
    this.type = type;
    this.description = description;
  }
}

export default Interraction;