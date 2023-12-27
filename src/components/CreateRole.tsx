import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";

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
      <Typography gutterBottom>
        创建角色
      </Typography>
    </MyDialog>
  )
};

export default CreateRole;