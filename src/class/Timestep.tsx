import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";
import Interaction from "./Interaction";

class Timestep {
  id: number;
  title: string;
  related_scene: SceneAgent;
  related_roles: RoleAgent[];
  interactions: Interaction[];


  constructor(
    id: number = 0, 
    title: string = "",
    related_scene: SceneAgent = new SceneAgent(), 
    related_roles: RoleAgent[] = [],
    interactions: Interaction[] = []
  ) {
    this.id = id;
    this.title = title;
    this.related_scene = related_scene;
    this.related_roles = related_roles;
    this.interactions = interactions;
  }
}

export default Timestep;