import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import EditInteraction from "./EditInteraction";
import Interaction from "@/class/Interaction";

interface InteractionInfoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: Interaction;
}

const InteractionInfo = (props: InteractionInfoProps) => {
  const onOK = () => {props.setOpen(false)}
  const info: Interaction = props.info ? props.info : new Interaction();
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onOK} okText="确定" title={info.type}>
      <EditInteraction mode={"update"} info={info}/>
    </MyDialog>
  )
};

export default InteractionInfo;