import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { TextField, Typography } from "@mui/material";
import EditRole from "./EditRole";

interface CreateRoleProps {
  story_id: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateRole = (props: CreateRoleProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建角色'} onOK={onOK} onClose={onOK} okText="取消">
      <Typography variant="body1">
        正在创建角色，请按照下面的指引完成角色设定，然后可以用该角色进行故事创作
      </Typography>
      <br/>
      <EditRole mode={"create"} story_id={props.story_id}/>
    </MyDialog>
  )
};

export default CreateRole;