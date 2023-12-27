import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { TextField, Typography } from "@mui/material";

interface CreateTimeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateScene = (props: CreateTimeProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建场景'} onOK={onOK} okText="确定">
      <Typography gutterBottom>
        正在创建场景，请按照下面的指引完成场景设定，然后可以用该场景进行故事创作
      </Typography>
      <br/>
      <TextField label="位置" variant="outlined" fullWidth/>
      <br/><br/>
      <TextField label="时间" variant="outlined" fullWidth/>
      <br/><br/>
      <TextField label="氛围描述" variant="outlined" fullWidth multiline/>
      <br/><br/>
      <TextField label="感官描述" variant="outlined" fullWidth multiline/>
      <br/><br/>
      <TextField label="其他信息(可选)" variant="outlined" fullWidth multiline/>
    </MyDialog>
  )
};

export default CreateScene;