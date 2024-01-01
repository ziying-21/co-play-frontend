import SceneAgent from "@/class/SceneAgent";
import { request } from "@/utils/network";
import { Button, FormControlLabel, Switch, TextField, Tooltip } from "@mui/material";
import { Divider } from "antd";
import { useState } from "react";

interface EditSceneProps {
  story_id: number;
  mode: "create" | "update";
  info?: SceneAgent;
}

const EditScene = (props: EditSceneProps) => {

  const [place, setPlace] = useState(props.info?props.info.place:"");
  const [time, setTime] = useState(props.info?props.info.time:"");
  const [atmosphere, setAtmosphere] = useState(props.info?props.info.atmosphere.join('\n'):"");
  const [feeling, setFeeling] = useState(props.info?props.info.feeling.join('\n'):"");
  const [otherInformation, setOtherInformation] = useState(props.info?props.info.otherInformation.join('\n'):"");
  const [needCompletion, setNeedCompletion] = useState(false);

  const onSubmit = () => {
    request(`/api/scene/${props.mode}`, "POST", {
      id: props.mode=="create"?props.info?.id:undefined,
      place: place,
      time: time,
      atmosphere: atmosphere.split('\n'),
      feeling: feeling.split('\n'),
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
      <TextField label="位置" variant="outlined" defaultValue={place} onChange={(e) => {setPlace(e.target.value);}}/>
      <Divider type="vertical" />
      <Tooltip title="你可以只指定部分内容，剩余信息由LLM补全">
        <FormControlLabel control={<Switch disabled={props.mode=="update"} onChange={(e) => { setNeedCompletion(e.target.checked) }} />} label="是否自动补全" />
      </Tooltip>
      <br /><br />
      <TextField label="时间" variant="outlined" fullWidth defaultValue={time} onChange={(e) => {setTime(e.target.value);}}/>
      <br /><br />
      <TextField label="氛围描述" variant="outlined" fullWidth multiline defaultValue={atmosphere} onChange={(e) => {setAtmosphere(e.target.value);}}/>
      <br /><br />
      <TextField label="感官描述" variant="outlined" fullWidth multiline defaultValue={feeling} onChange={(e) => {setFeeling(e.target.value);}}/>
      <br /><br />
      <TextField label="其他信息(可选)" variant="outlined" fullWidth multiline defaultValue={otherInformation} onChange={(e) => {setOtherInformation(e.target.value);}}/>
      <br /><br />
      <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
    </>
  )
}

export default EditScene;