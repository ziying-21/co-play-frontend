import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";
import Interraction from "./Interraction";

class Timestep {
  id: number;
  title: string;
  related_scene: SceneAgent;
  related_role: RoleAgent[];
  related_interraction: Interraction[];


  constructor(
    id: number = 0, 
    title: string = "",
    related_scene: SceneAgent = new SceneAgent(), 
    related_role: RoleAgent[] = [],
    related_interraction: Interraction[] = []
  ) {
    this.id = id;
    this.title = title;
    this.related_scene = related_scene;
    this.related_role = related_role;
    this.related_interraction = related_interraction;
  }
}

export default Timestep;