import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";

class Timestep {
  id: number;
  related_scene: SceneAgent[];
  related_role: RoleAgent[];

  constructor() {
    this.id = 0;
    this.related_scene = [];
    this.related_role = [];
  }
}

export default Timestep;