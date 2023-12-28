import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";

class Timestep {
  id: number;
  title: string;
  related_scene: SceneAgent;
  related_role: RoleAgent[];
  related_interraction: any[];

  constructor(
    id: number = 0, 
    title: string = "",
    related_scene: SceneAgent = new SceneAgent(), 
    related_role: RoleAgent[] = [],
    related_interraction: any[] = []
  ) {
    this.id = id;
    this.title = title;
    this.related_scene = related_scene;
    this.related_role = related_role;
    this.related_interraction = related_interraction;
  }
}

export default Timestep;