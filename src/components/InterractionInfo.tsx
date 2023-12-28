import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import EditInterraction from "./EditInterraction";
import Interraction from "@/class/Interraction";

interface InterractionInfoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: Interraction;
}

const InterractionInfo = (props: InterractionInfoProps) => {
  const onOK = () => {props.setOpen(false)}
  const info: Interraction = props.info ? props.info : new Interraction();
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onOK} okText="确定" title={info.type}>
      <EditInterraction mode={"update"} info={info}/>
    </MyDialog>
  )
};

export default InterractionInfo;