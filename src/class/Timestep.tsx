import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";

class Timestep {
  id: number;
  title: string;
  related_scene: SceneAgent;
  related_role: RoleAgent[];

  constructor(
    id: number = 0, 
    title: string = "",
    related_scene: SceneAgent = new SceneAgent(), 
    related_role: RoleAgent[] = []
  ) {
    this.id = id;
    this.title = title;
    this.related_scene = related_scene;
    this.related_role = related_role;
  }
}

export default Timestep;