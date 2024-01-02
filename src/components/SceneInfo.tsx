import SceneAgent from "@/class/SceneAgent";
import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import EditScene from "./EditScene";

interface SceneInfoProps {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
  story_id: number
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  info: SceneAgent;
}

const SceneInfo = (props: SceneInfoProps) => {
  const onOK = () => {props.setOpen(false)}
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onOK} okText="取消" title={props.info.place}>
      <EditScene mode={"update"} info={props.info} story_id={props.story_id} refresh={props.refresh} setRefresh={props.setRefresh}/>
    </MyDialog>
  )
};

export default SceneInfo;