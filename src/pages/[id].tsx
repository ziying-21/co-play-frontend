import { useRouter } from "next/router"
import Story from "@/components/Story";
import RoleAgent from "@/class/RoleAgent";
import SceneAgent from "@/class/SceneAgent";
import Timestep from "@/class/Timestep";

export interface SinglestoryProps {
  id: number;
  title: string;
}

const Singlestory = () => {
  const router = useRouter();
  const { id } = router.query;
  const example_role = new RoleAgent();
  const example_scene = new SceneAgent();
  const example_timestep = new Timestep();
  return (
    <>
      <Story id={0} role={[example_role]} scene={[example_scene]} timesteps={[example_timestep]}/>
    </>
  );
}

export default Singlestory;