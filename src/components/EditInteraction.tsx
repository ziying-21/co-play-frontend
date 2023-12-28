import Interaction from "@/class/Interaction";
import { request } from "@/utils/network";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

interface EditInteractionProps {
  related_timestep_ids: number;
  mode: "create" | "update";
  info?: Interaction;
}

const EditInteraction = (props: EditInteractionProps) => {

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    request(`/api/interaction/${props.mode}`, "POST", {
      id: props.mode=="create"?props.info?.id:undefined,
      related_timestep_id: props.related_timestep_ids,
      type: type,
      description: description
    })
    .then(() => {

    })
    .catch(() => {

    })
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="scene">选择交互类型</InputLabel>
        <Select label="选择交互类型" labelId="scene" defaultValue={props.info?.type} onChange={(e) => {setType(e.target.value);}}>
          <MenuItem value={"speech"}>语言</MenuItem>
          <MenuItem value={"movement"}>动作</MenuItem>
          <MenuItem value={"expression"}>神态</MenuItem>
          <MenuItem value={"emotion"}>心理</MenuItem>
          <MenuItem value={"others"}>其他</MenuItem>
        </Select>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <TextField label="描述" variant="outlined" defaultValue={props.info?.description} multiline onChange={(e) => {setDescription(e.target.value);}}/>
      </FormControl>
      <br /><br />
      <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
    </>
  )
}

export default EditInteraction;