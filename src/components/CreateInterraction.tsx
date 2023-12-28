import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";
import EditInterraction from "./EditInterraction";

interface CreateInterractionProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}


const CreateInterraction = (props: CreateInterractionProps) => {
    const onOK = () => {
        props.setOpen(false);
      }
      return (
        <MyDialog open={props.open} setOpen={props.setOpen} title={'创建交互'} onOK={onOK} onClose={onOK} okText="取消">
          <Typography variant="body1">
            正在创建交互，请按照下面的指引完成交互设定，然后可以用该交互进行故事创作
          </Typography>
          <br/>
          <EditInterraction mode={"create"}/>
        </MyDialog>
      )
}

export default CreateInterraction;