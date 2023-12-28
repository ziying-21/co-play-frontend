import SceneAgent from "@/class/SceneAgent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface SceneInfoDetailProps {
  info: SceneAgent;
}

const SceneInfoDetail = (props: SceneInfoDetailProps) => {
  return (
    <>
      <Typography variant="body1">  时间: {props.info.time} </Typography>
      <Typography variant="body1">  地点: {props.info.place} </Typography>
      <Typography variant="body1">  气氛: {props.info.atmosphere} </Typography>
      <Typography variant="body1">  视觉: {props.info.vision} </Typography>
      <Typography variant="body1">  听觉: {props.info.hearing} </Typography>
      <Typography variant="body1">  嗅觉: {props.info.olfaction} </Typography>
      <Typography variant="body1">  其他信息: {props.info.otherInformation} </Typography>
      <Button style={{ width: "100%" }}> 编辑场景 </Button>
    </>
  )
}

export default SceneInfoDetail;