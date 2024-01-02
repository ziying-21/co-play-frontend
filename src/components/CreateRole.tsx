import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { Typography } from "@mui/material";
import EditRole from "./EditRole";

interface CreateRoleProps {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
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
      <EditRole mode={"create"} story_id={props.story_id} refresh={props.refresh} setRefresh={props.setRefresh} setOpen={props.setOpen}/>
    </MyDialog>
  )
};

export default CreateRole;