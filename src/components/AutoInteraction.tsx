import { SetStateAction, Dispatch } from "react";
import MyDialog from "./MyDialog";
import RoleAgent from "@/class/RoleAgent";

interface AutoInteractionProps {
  role: RoleAgent[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AutoInteraction = (props: AutoInteractionProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onOK} okText={"取消"} title={"自动交互"}>
      <></>
    </MyDialog>
  )
}

export default AutoInteraction;