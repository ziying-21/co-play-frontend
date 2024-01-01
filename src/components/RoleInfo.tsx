import RoleAgent from "@/class/RoleAgent";
import MyDialog from "./MyDialog";
import { Dispatch, SetStateAction, useState } from 'react';
import Chat from "./Chat";
import EditRole from "./EditRole";

interface RoleInfoProps {
  story_id: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: RoleAgent
}

const RoleInfo = (props: RoleInfoProps) => {
  const [interractMode, setInterractMode] = useState(false);
  const onOK = () => { setInterractMode((x) => !x); }
  const onClose = () => {setInterractMode(false); props.setOpen(false);}
  const info: RoleAgent = props.info ? props.info : new RoleAgent();
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onClose} okText={interractMode ? "返回详情界面" : "点击此处和TA对话"} title={info.name}>
      {
        interractMode ? 
          <Chat role={props.info}/> 
        : 
          <EditRole mode="update" info={props.info} story_id={props.story_id}/>
      }
    </MyDialog>
  )
}

export default RoleInfo;