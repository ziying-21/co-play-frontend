import Interaction from "@/class/Interaction";
import RoleAgent from "@/class/RoleAgent";
import { request } from "@/utils/network";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

interface EditInteractionProps {
  roles: RoleAgent[];
  related_timestep_ids: number;
  mode: "create" | "update";
  info?: Interaction;
}

const EditInteraction = (props: EditInteractionProps) => {

  const [movement, setMovement] = useState<string>(props.info?props.info.info['movement'].join('\n'):"");
  const [expression, setExpression] = useState<string>(props.info?props.info.info['expression'].join('\n'):""); 
  const [speech, setSpeech] = useState<string>(props.info?props.info.info['speech'].join('\n'):"");
  const [emotion, setEmotion] = useState<string>(props.info?props.info.info['emotion'].join('\n'):"");
  const [roleID, setRoleID] = useState(props.info?props.info.role.id:-1);

  const onSubmit = () => {
    request(`/api/interaction/${props.mode}`, "POST", {
      interaction_id: props.mode=="create"?props.info?.id:undefined,
      timestep_id: props.related_timestep_ids,
      sender_id: roleID,
      info: {
        "BEHAVIOR": movement.split('\n'),
        "SPEECH": speech.split('\n'),
        "EXPRESSION": expression.split('\n'),
        "PSYCHOLOGICAL_ACTIVITY": emotion.split('\n')
      }
    })
    .then(() => {

    })
    .catch(() => {

    })
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="role">选择该交互关联的角色</InputLabel>
        <Select label="选择该交互关联的角色" labelId="role" value={roleID} 
          onChange={(e) => {setRoleID(parseInt(e.target.value.toString()))}}
        >
          {
            props.roles.map((role, idx) => (
              <MenuItem key={idx} value={role.id}>{role.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <TextField label="语言" variant="outlined" value={speech} multiline onChange={(e) => {setSpeech(e.target.value);}}/>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <TextField label="动作" variant="outlined" value={movement} multiline onChange={(e) => {setMovement(e.target.value);}}/>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <TextField label="神态" variant="outlined" value={expression} multiline onChange={(e) => {setExpression(e.target.value);}}/>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <TextField label="心理" variant="outlined" value={emotion} multiline onChange={(e) => {setEmotion(e.target.value);}}/>
      </FormControl>
      <br /><br />
      <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
    </>
  )
}

export default EditInteraction;