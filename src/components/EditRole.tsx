import RoleAgent from "@/class/RoleAgent";
import { request } from "@/utils/network";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

interface EditRoleProps {
  story_id: number;
  mode: 'create' | 'update';
  info?: RoleAgent;
}

const EditRole = (props: EditRoleProps) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const [preferences, setPreferences] = useState("");
  const [otherInformation, setOtherInformation] = useState("");
  const onSubmit = () => {
    request(`/api/role/${props.mode}`, "POST", {
      id: props.mode=="create"?props.info?.id:undefined,
      name: name,
      age: age,
      characteristics: characteristics.split('\n'),
      preferences: preferences.split('\n'),
      otherInformation: otherInformation.split('\n'),
      story_id: props.story_id
    })
    .then(() => {

    })
    .catch(() => {

    })
  }

  return (
    <>
      <TextField label="角色名称" variant="outlined" fullWidth defaultValue={props.info?.name} onChange={(e) => {setName(e.target.value);}}/>
      <br /><br />
      <TextField label="角色年龄(数字或描述，如30、三四十岁)" variant="outlined" fullWidth defaultValue={props.info?.age} onChange={(e) => {setAge(e.target.value);}}/>
      <br /><br />
      <TextField label="角色性格(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.characteristics.join('\n')} onChange={(e) => {setCharacteristics(e.target.value);}}/>
      <br /><br />
      <TextField label="角色爱好(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.preferences.join('\n')} onChange={(e) => {setPreferences(e.target.value);}}/>
      <br /><br />
      <TextField label="其他信息(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.otherInformation.join('\n')} onChange={(e) => {setOtherInformation(e.target.value);}}/>
      <br /><br />
      <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
    </>
  )
}

export default EditRole;