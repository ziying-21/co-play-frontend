import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import EditInteraction from "./EditInteraction";
import Interaction from "@/class/Interaction";
import RoleAgent from "@/class/RoleAgent";

interface InteractionInfoProps {
  story_id: number;
  roles: RoleAgent[];
  fresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: Interaction;
}

const InteractionInfo = (props: InteractionInfoProps) => {
  const onOK = () => {props.setOpen(false)}
  const info: Interaction = props.info ? props.info : new Interaction();
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onOK} okText="确定" title={info.sender.name}>
      <EditInteraction mode={"update"} info={info} related_timestep_ids={info.related_timestep_id} roles={props.roles} story_id={props.story_id} fresh={props.fresh} setRefresh={props.setRefresh}/>
    </MyDialog>
  )
};

export default InteractionInfo;