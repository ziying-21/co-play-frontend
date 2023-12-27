import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";

interface CreateTimeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateTimestep = (props: CreateTimeProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建时间步'} onOK={onOK}>
      <Typography gutterBottom>
        创建时间步
      </Typography>
    </MyDialog>
  )
};

export default CreateTimestep;