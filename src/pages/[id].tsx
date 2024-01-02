import { useRouter } from "next/router"
import Story from "@/components/Story";
import RoleAgent from "@/class/RoleAgent";
import SceneAgent from "@/class/SceneAgent";
import Timestep from "@/class/Timestep";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { request } from "@/utils/network";

export interface SingleStoryProps {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const Singlestory = (props: SingleStoryProps) => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [roles, setRoles] = useState<RoleAgent[]>([]);
  const [scenes, setScenes] = useState<SceneAgent[]>([]);
  const [timesteps, setTimesteps] = useState<Timestep[]>([]);
  
  useEffect(() => {
    request(`/api/story?story_id=${id}`, "GET")
    .then((response) => {
      setTitle(response.data.title);
      const newRoles = response.data.roles;
      const newScenes = response.data.scenes;
      const newTimesteps = response.data.timesteps;
      setRoles(newRoles);
      setScenes(newScenes);
      setTimesteps(newTimesteps);
    })
    .catch(() => {
      // TODO
    })
  }, [props.refresh, id])

  return (
    <>
      <Story id={id} title={title} role={roles} scene={scenes} timesteps={timesteps} refresh={props.refresh} setRefresh={props.setRefresh} />
    </>
  );
}

export default Singlestory;