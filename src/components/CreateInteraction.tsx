import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";
import EditInteraction from "./EditInteraction";

interface CreateInteractionProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}


const CreateInteraction = (props: CreateInteractionProps) => {
    const onOK = () => {
        props.setOpen(false);
      }
      return (
        <MyDialog open={props.open} setOpen={props.setOpen} title={'创建交互'} onOK={onOK} onClose={onOK} okText="取消">
          <Typography variant="body1">
            正在创建交互，请按照下面的指引完成交互设定，然后可以用该交互进行故事创作
          </Typography>
          <br/>
          <EditInteraction mode={"create"}/>
        </MyDialog>
      )
}

export default CreateInteraction;