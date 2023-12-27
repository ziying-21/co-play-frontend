import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { TextField, Typography } from "@mui/material";

interface CreateStoryProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateStory = (props: CreateStoryProps) => {
  const onOK = () => {
    // TODO
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建一个新故事'} onOK={onOK}>
      <>
        <Typography variant="body1">
          正在创建您的故事，请按照下面的指引完成故事的初始设定，然后进行创作
        </Typography>
        <br/>
        <TextField label="故事标题(必填)" variant="outlined" fullWidth/>
        <br/><br/>
        <TextField label="初始背景设置(可选，也可以稍后设置)" variant="outlined" fullWidth multiline/>
      </>
    </MyDialog>
  )
};

export default CreateStory;