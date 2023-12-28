import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";
import Interaction from "./Interaction";

class Timestep {
  id: number;
  title: string;
  related_scene: SceneAgent;
  related_role: RoleAgent[];
  related_interaction: Interaction[];


  constructor(
    id: number = 0, 
    title: string = "",
    related_scene: SceneAgent = new SceneAgent(), 
    related_role: RoleAgent[] = [],
    related_interaction: Interaction[] = []
  ) {
    this.id = id;
    this.title = title;
    this.related_scene = related_scene;
    this.related_role = related_role;
    this.related_interaction = related_interaction;
  }
}

export default Timestep;