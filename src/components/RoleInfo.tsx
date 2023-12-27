import RoleAgent from "@/class/RoleAgent";
import MyDialog from "./MyDialog";
import { Dispatch, SetStateAction, useState } from 'react';
import RoleInfoDetail from "./RoleInfoDetail";

interface RoleInfoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: RoleAgent
}

const RoleInfo = (props: RoleInfoProps) => {
  const [interractMode, setInterractMode] = useState(false);
  const onOK = () => { setInterractMode((x) => !x); }
  const info: RoleAgent = props.info ? props.info : new RoleAgent();
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} okText={interractMode ? "返回详情界面" : "点击此处和TA对话"} title={info.name}>
      {
        interractMode ? 
          <>
          
          </> 
        : 
          <RoleInfoDetail info={props.info}/>
      }
    </MyDialog>
  )
}

export default RoleInfo;