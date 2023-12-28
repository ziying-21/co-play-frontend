import SceneAgent from "@/class/SceneAgent";
import { Button, TextField } from "@mui/material";

interface EditSceneProps {
  mode: "create" | "update";
  info?: SceneAgent;
}

const EditScene = (props: EditSceneProps) => {
  return (
    <>
      <TextField label="位置" variant="outlined" fullWidth defaultValue={props.info?.place}/>
      <br /><br />
      <TextField label="时间" variant="outlined" fullWidth defaultValue={props.info?.time}/>
      <br /><br />
      <TextField label="氛围描述" variant="outlined" fullWidth multiline defaultValue={props.info?.atmosphere}/>
      <br /><br />
      <TextField label="感官描述" variant="outlined" fullWidth multiline defaultValue={props.info?.feeling}/>
      <br /><br />
      <TextField label="其他信息(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.otherInformation}/>
      <br /><br />
      <Button fullWidth> 确认当前编辑 </Button>
    </>
  )
}

export default EditScene;