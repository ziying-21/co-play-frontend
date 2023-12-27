import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";

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
      <Typography gutterBottom>
        创建一个新故事
      </Typography>
    </MyDialog>
  )
};

export default CreateStory;