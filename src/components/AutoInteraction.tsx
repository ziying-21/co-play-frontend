import { SetStateAction, Dispatch, useState } from "react";
import MyDialog from "./MyDialog";
import RoleAgent from "@/class/RoleAgent";
import Interaction from "@/class/Interaction";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";
import { ColorList } from "@/utils/utils";
import EditInteraction from "./EditInteraction";

interface AutoInteractionProps {
  timestep_id: number;
  role: RoleAgent[];
  interactions: Interaction[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AutoInteraction = (props: AutoInteractionProps) => {
  const [selectedInteractionIdx, setSelectedInteractionIdx] = useState<number>(-1);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<"create" | "update">("create");
  const [interactions, setInteractions] = useState<Interaction[]>(props.interactions);
  
  const onOK = () => {
    if (isEditMode) {
      setIsEditMode(false);
    } else {
      props.setOpen(false);
    }
  }

  const onClose = () => {
    setIsEditMode(false);
    props.setOpen(false);
  }

  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onClose} okText={isEditMode ? "返回交互列表" : "取消"} title={"自动交互"}>
      <>
        {
          isEditMode ?
            <EditInteraction roles={props.role} related_timestep_ids={props.timestep_id} mode={editMode} info={editMode=="create"?undefined:interactions[selectedInteractionIdx]}/>
            :
            <>
            <List dense>
              {interactions.map((interaction, idx) => (
                <ListItem
                  key={idx}
                  secondaryAction={
                    <Button onClick={() => { setIsEditMode(true); setSelectedInteractionIdx(idx); }}>
                      查看
                    </Button>
                  }
                >
                  <ListItemButton onClick={() => { setIsEditMode(true); setSelectedInteractionIdx(idx); }}>
                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: ColorList[idx % ColorList.length] }} sizes='large'> {interaction.role.name[0]} </Avatar>
                    </ListItemAvatar>
                    {interaction.role.name}
                  </ListItemButton>
                </ListItem>
              )
              )}
            </List>
            <Button style={{width: "50%"}}> 开始一轮自动交互 </Button>
            <Button style={{width: "50%"}} onClick={() => {setIsEditMode(true); setEditMode("create")}}> 创建新交互 </Button>
            </>
        }
      </>
    </MyDialog>
  )
}

export default AutoInteraction;