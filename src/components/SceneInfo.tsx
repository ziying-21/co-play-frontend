import SceneAgent from "@/class/SceneAgent";
import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface SceneInfoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: SceneAgent;
}

const SceneInfo = (props: SceneInfoProps) => {
  const onOK = () => {props.setOpen(false)}
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} okText="确定" title={props.info.place}>
      <Typography variant="body1">  时间: {props.info.time} </Typography>
      <Typography variant="body1">  地点: {props.info.place} </Typography>
      <Typography variant="body1">  气氛: {props.info.atmosphere} </Typography>
      <Typography variant="body1">  视觉: {props.info.vision} </Typography>
      <Typography variant="body1">  听觉: {props.info.hearing} </Typography>
      <Typography variant="body1">  嗅觉: {props.info.olfaction} </Typography>
      <Typography variant="body1">  其他信息: {props.info.otherInformation} </Typography>
      <Button style={{ width: "100%" }}> 编辑场景 </Button>
    </MyDialog>
  )
};

export default SceneInfo;