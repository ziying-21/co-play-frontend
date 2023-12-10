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
  const role0 = new RoleAgent("示例", 18, "男");
  const role1 = new RoleAgent("示例", 19, "男");
  const role2 = new RoleAgent("示例", 20, "男");
  const role3 = new RoleAgent("示例", 18, "女");
  const role4 = new RoleAgent("示例", 21, "女");
  const role5 = new RoleAgent("示例", 23, "男");
  const role6 = new RoleAgent("示例", 17, "男");
  const scene0 = new SceneAgent("示例", "示例", "示例", ["示例"], ["示例"], ["示例"]);
  const scene1 = new SceneAgent("示例", "示例", "示例", ["示例"], ["示例"], ["示例"]);
  const scene2 = new SceneAgent("示例", "示例", "示例", ["示例"], ["示例"], ["示例"]);
  const scene3 = new SceneAgent("示例", "示例", "示例", ["示例"], ["示例"], ["示例"]);
  const timestep0 = new Timestep(0, "布鲁诺坚持日心说", scene0, [role0, role1, role2, role3, role5]);
  const timestep1 = new Timestep(1, "牛顿被苹果砸中", scene0, [role1, role6]);
  const timestep2 = new Timestep(2, "高斯尺规作出正17边形", scene2, [role2, role3]);
  const timestep3 = new Timestep(3, "牛顿发表《自然哲学的数学原理》", scene3, [role4, role6]);
  const timestep4 = new Timestep(4, "伽利略两个铁球同时落地", scene1, [role3, role5]);
  const timestep5 = new Timestep(5, "阿基米德洗澡", scene1, [role1, role4]);
  return (
    <>
      <Story id={id} role={[role0, role2, role3, role4, role5, role6]} 
      scene={[
        scene0,
        scene1,
        scene2,
        scene3
      ]} 
      timesteps={[
        timestep0,
        timestep1,
        timestep2,
        timestep3,
        timestep4,
        timestep5
      ]}/>
    </>
  );
}

export default Singlestory;