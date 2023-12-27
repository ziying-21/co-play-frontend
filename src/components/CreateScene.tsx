import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";

interface CreateTimeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateScene = (props: CreateTimeProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建场景'} onOK={onOK}>
      <Typography gutterBottom>
        创建场景
      </Typography>
    </MyDialog>
  )
};

export default CreateScene;