import RoleAgent from "@/class/RoleAgent";
import SceneAgent from "@/class/SceneAgent";
import Timestep from "@/class/Timestep";
import { request } from "@/utils/network";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

interface EditTimestepProps {
  roles: RoleAgent[];
  scenes: SceneAgent[];
  mode: "create" | "update";
  info?: Timestep;
};

const EditTimestep = (props: EditTimestepProps) => {

  const [title, SetTitle] = useState("");
  const [roles, setRoles] = useState<any>([]);
  const [scene, setScene] = useState<number>(-1);

  const onSubmit = () => {
    request(`/api/timestep/${props.mode}`, "POST", {
      id: props.mode=="create"?props.info?.id:undefined,
      title: title,
      roles: roles,
      scene: scene
    })
    .then(() => {

    })
    .catch(() => {

    })
  }

  return (
    <>
      <TextField label="标题" variant="outlined" fullWidth defaultValue={props.info?.title} onChange={(e) => { SetTitle(e.target.value); }} />
      <br /><br />
      <FormControl fullWidth>
        <InputLabel id="scene">选择该时间步发生的场景</InputLabel>
        <Select label="选择该时间步发生的场景" labelId="scene" defaultValue={props.info?.related_scene.id} onChange={(e) => {setScene(parseInt(e.target.value.toString()))}}>
          {
            props.scenes.map((scene, idx) => (
              <MenuItem key={idx} value={scene.id}>{scene.place}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <InputLabel id="role">选择该时间步关联的角色</InputLabel>
        <Select label="选择该时间步关联的角色" labelId="role" multiple defaultValue={props.info?props.info.related_role.map((role) => (role.id)):[]} 
          onChange={(e) => {setRoles(e.target.value)}}
        >
          {
            props.roles.map((role, idx) => (
              <MenuItem key={idx} value={role.id}>{role.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <br/><br />
      <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
    </>
  )
}

export default EditTimestep;