import SceneAgent from "@/class/SceneAgent";
import { request } from "@/utils/network";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

interface EditSceneProps {
  mode: "create" | "update";
  info?: SceneAgent;
}

const EditScene = (props: EditSceneProps) => {

  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [atmosphere, setAtmosphere] = useState("");
  const [feeling, setFeeling] = useState("");
  const [otherInformation, setOtherInformation] = useState("");

  const onSubmit = () => {
    request(`/api/scene/${props.mode}`, "POST", {
      id: props.mode=="create"?props.info?.id:undefined,
      place: place,
      time: time,
      atmosphere: atmosphere,
      feeling: feeling,
      otherInformation: otherInformation
    })
    .then(() => {

    })
    .catch(() => {

    })
  }

  return (
    <>
      <TextField label="位置" variant="outlined" fullWidth defaultValue={props.info?.place} onChange={(e) => {setPlace(e.target.value);}}/>
      <br /><br />
      <TextField label="时间" variant="outlined" fullWidth defaultValue={props.info?.time} onChange={(e) => {setTime(e.target.value);}}/>
      <br /><br />
      <TextField label="氛围描述" variant="outlined" fullWidth multiline defaultValue={props.info?.atmosphere} onChange={(e) => {setAtmosphere(e.target.value);}}/>
      <br /><br />
      <TextField label="感官描述" variant="outlined" fullWidth multiline defaultValue={props.info?.feeling} onChange={(e) => {setFeeling(e.target.value);}}/>
      <br /><br />
      <TextField label="其他信息(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.otherInformation} onChange={(e) => {setOtherInformation(e.target.value);}}/>
      <br /><br />
      <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
    </>
  )
}

export default EditScene;