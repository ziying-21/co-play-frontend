import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { TextField, Typography } from "@mui/material";

interface CreateRoleProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateRole = (props: CreateRoleProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建角色'} onOK={onOK}>
      <Typography variant="body1">
        正在创建角色，请按照下面的指引完成角色设定，然后可以用该角色进行故事创作
      </Typography>
      <br/>
      <TextField label="角色名称" variant="outlined" fullWidth/>
      <br/><br/>
      <TextField label="角色年龄(数字或描述，如30、三四十岁)" variant="outlined" fullWidth/>
      <br/><br/>
      <TextField label="角色性格(可选)" variant="outlined" fullWidth multiline/>
      <br/><br/>
      <TextField label="角色爱好(可选)" variant="outlined" fullWidth multiline/>
      <br/><br/>
      <TextField label="其他信息(可选)" variant="outlined" fullWidth multiline/>
    </MyDialog>
  )
};

export default CreateRole;