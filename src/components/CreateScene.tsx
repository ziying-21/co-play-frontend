import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";
import EditScene from "./EditScene";

interface CreateTimeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateScene = (props: CreateTimeProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建场景'} onOK={onOK} onClose={onOK} okText="取消">
      <Typography gutterBottom>
        正在创建场景，请按照下面的指引完成场景设定，然后可以用该场景进行故事创作
      </Typography>
      <br/>
      <EditScene mode={"create"}/>
    </MyDialog>
  )
};

export default CreateScene;