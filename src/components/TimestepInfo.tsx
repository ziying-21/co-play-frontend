import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";

interface TimestepInfoProps {
  id: number;
  related_scene: SceneAgent[];
  related_role: RoleAgent[];
}

const TimestepInfo = (props: TimestepInfoProps) => {
  return (
    <>TimestepInfo</>
  )
};

export default TimestepInfo;