import RoleAgent from "@/class/RoleAgent";
import SceneAgent from "@/class/SceneAgent";
import Timestep from "@/class/Timestep";

interface StoryProps {
  id: number;
  role: RoleAgent[];
  scene: SceneAgent[];
  timesteps: Timestep[];
}

const Story = (props: StoryProps) => {
  return (
    <>
      <p>id: {props.id}</p>
      <p>role: {props.role[0].age}</p>
      <p>scene: {props.scene[0].hearing}</p>
      <p>timesteps: {}</p>

    </>
  )
};

export default Story;