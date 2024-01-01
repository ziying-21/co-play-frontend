import RoleAgent from "@/class/RoleAgent";
import { request } from "@/utils/network";
import { Button, FormControlLabel, Switch, TextField, Tooltip } from "@mui/material";
import { Divider } from "antd";
import { useState } from "react";

interface EditRoleProps {
  story_id: number;
  mode: 'create' | 'update';
  info?: RoleAgent;
}

const EditRole = (props: EditRoleProps) => {

  const [name, setName] = useState(props.info?props.info.name:"");
  const [age, setAge] = useState(props.info?props.info.age:"");
  const [characteristics, setCharacteristics] = useState(props.info?props.info.characteristics.join('\n'):"");
  const [preferences, setPreferences] = useState(props.info?props.info.preferences.join('\n'):"");
  const [otherInformation, setOtherInformation] = useState(props.info?props.info.otherInformation.join('\n'):"");
  const [needCompletion, setNeedCompletion] = useState(false);
  const onSubmit = () => {
    request(`/api/role/${props.mode}`, "POST", {
      id: props.mode == "create" ? props.info?.id : undefined,
      name: name,
      age: age,
      characteristics: characteristics.split('\n'),
      preferences: preferences.split('\n'),
      otherInformation: otherInformation.split('\n'),
      story_id: props.story_id,
      need_completion: needCompletion
    })
      .then(() => {

      })
      .catch(() => {

      })
  }

  return (
    <>
      <TextField label="角色名称" variant="outlined" defaultValue={name} onChange={(e) => { setName(e.target.value); }} />
      <Divider type="vertical" />
      <Tooltip title="你可以只指定部分内容，剩余信息由LLM补全">
        <FormControlLabel control={<Switch disabled={props.mode=="update"} onChange={(e) => { setNeedCompletion(e.target.checked) }} />} label="是否自动补全" />
      </Tooltip>
      <br /><br />
      <TextField label="角色年龄(数字或描述，如30、三四十岁)" variant="outlined" fullWidth defaultValue={age} onChange={(e) => { setAge(e.target.value); }} />
      <br /><br />
      <TextField label="角色性格(可选，每行一条)" variant="outlined" fullWidth multiline defaultValue={characteristics} onChange={(e) => { setCharacteristics(e.target.value); }} />
      <br /><br />
      <TextField label="角色爱好(可选，每行一条)" variant="outlined" fullWidth multiline defaultValue={preferences} onChange={(e) => { setPreferences(e.target.value); }} />
      <br /><br />
      <TextField label="其他信息(可选，每行一条)" variant="outlined" fullWidth multiline defaultValue={otherInformation} onChange={(e) => { setOtherInformation(e.target.value); }} />
      <br /><br />
      <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
    </>
  )
}

export default EditRole;