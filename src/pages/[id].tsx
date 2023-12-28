import { useRouter } from "next/router"
import Story from "@/components/Story";
import RoleAgent from "@/class/RoleAgent";
import SceneAgent from "@/class/SceneAgent";
import Timestep from "@/class/Timestep";
import Interaction from "@/class/Interaction";
// import { useEffect } from "react";
// import { request } from "@/utils/network";

export interface SingleStoryProps {
  id: number;
  title: string;
  roles: RoleAgent[];
  scenes: SceneAgent[];
  timesteps: Timestep[];
}

const Singlestory = () => {
  const router = useRouter();
  const { id } = router.query;
  const role0 = new RoleAgent("示例1", 18, "男");
  const role1 = new RoleAgent("示例2", 19, "男");
  const role2 = new RoleAgent("示例3", 20, "男");
  const role3 = new RoleAgent("示例4", 18, "女");
  const role4 = new RoleAgent("示例5", 21, "女");
  const role5 = new RoleAgent("示例6", 23, "男");
  const role6 = new RoleAgent("示例7", 17, "男");
  const scene0 = new SceneAgent("示例1", "示例", "示例", ["示例"], "示例");
  const scene1 = new SceneAgent("示例2", "示例", "示例", ["示例"], "示例");
  const scene2 = new SceneAgent("示例3", "示例", "示例", ["示例"], "示例");
  const scene3 = new SceneAgent("示例4", "示例", "示例", ["示例"], "示例");

  const interaction0 = new Interaction("movement", "我打你");
  const interaction1 = new Interaction("emotion", "心理活动很复杂");
  const interaction2 = new Interaction("expression", "脸上露出不悦的神情");
  const interaction3 = new Interaction("speech", "我说：你好");
  const interaction4 = new Interaction("speech", "她说：你好");
  const interaction5 = new Interaction("movement", "我打死你");

  const timestep0 = new Timestep(0, "布鲁诺坚持日心说", scene0, [role0, role1, role2, role3, role5], [interaction0, interaction1, interaction2, interaction3,]);
  const timestep1 = new Timestep(1, "牛顿被苹果砸中", scene0, [role1, role6], [interaction0, interaction1]);
  const timestep2 = new Timestep(2, "高斯尺规作出正17边形", scene2, [role2, role3], [interaction2, interaction3]);
  const timestep3 = new Timestep(3, "牛顿发表《自然哲学的数学原理》", scene3, [role4, role6], [interaction5]);
  const timestep4 = new Timestep(4, "伽利略两个铁球同时落地", scene1, [role3, role5], []);
  const timestep5 = new Timestep(5, "阿基米德洗澡", scene1, [role1, role4], [interaction5]);

  // useEffect(() => {
  //   request("", "GET")
  // }, [])

  return (
    <>
      <Story 
      title="示例示例示例示例示例示例示例示例示例示例示例示例五个字"
      id={id} role={[role0, role2, role3, role4, role5, role6]} 
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