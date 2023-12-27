import RoleAgent from "@/class/RoleAgent";
import MyDialog from "./MyDialog";
import { Dispatch, SetStateAction } from 'react';

interface RoleInfoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: RoleAgent
}

const RoleInfo = (props: RoleInfoProps) => {
  const onOK = () => {}
  let info: RoleAgent = new RoleAgent("测试", 18, "male", "teacher");
  if (props.info) {
    info = props.info
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} title={info.name}>
      <> 角色信息 </>
    </MyDialog>
  )
}

export default RoleInfo;