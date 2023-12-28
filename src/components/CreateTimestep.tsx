import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";
import EditTimestep from "./EditTimestep";

interface CreateTimeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateTimestep = (props: CreateTimeProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建时间步'} onOK={onOK} onClose={onOK} okText="取消">
      <Typography gutterBottom>
        正在创建时间步，请按照下面的指引完成设定，然后可以进行故事创作
      </Typography>
      <EditTimestep mode="create"/>
    </MyDialog>
  )
};

export default CreateTimestep;