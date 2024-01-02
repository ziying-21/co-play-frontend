import { SetStateAction, Dispatch, useState } from "react";
import MyDialog from "./MyDialog";
import RoleAgent from "@/class/RoleAgent";
import Interaction from "@/class/Interaction";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";
import { ColorList } from "@/utils/utils";
import EditInteraction from "./EditInteraction";
import { request } from "@/utils/network";
import { Spin } from "antd";

interface AutoInteractionProps {
  story_id: number;
  timestep_id: number;
  role: RoleAgent[];
  interactions: Interaction[];
  fresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AutoInteraction = (props: AutoInteractionProps) => {
  const [selectedInteractionIdx, setSelectedInteractionIdx] = useState<number>(-1);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<"create" | "update">("create");
  // const [interactions, setInteractions] = useState<Interaction[]>(props.interactions);
  const [loading, setLoading] = useState(false);

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

  const launch = async () => {
    request("/api/interaction/launch", "POST", {
      timestep_id: props.timestep_id,
      story_id: props.story_id
    })
      .then((response) => {
        props.setRefresh(!props.fresh);
        const newInteractions = response.data.interactions;
        // setInteractions(newInteractions);
      })
      .catch(() => {

      })
      .finally(() => {setLoading(false);})
  }

  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onClose} okText={isEditMode ? "返回交互列表" : "取消"} title={"自动交互"}>
      <>
        {
          isEditMode ?
            <EditInteraction roles={props.role} related_timestep_ids={props.timestep_id} mode={editMode} info={editMode == "create" ? undefined : props.interactions[selectedInteractionIdx]} story_id={props.story_id} fresh={props.fresh} setRefresh={props.setRefresh} />
            :
            <>
              <List dense>
                {props.interactions.map((interaction, idx) => (
                  <ListItem
                    key={idx}
                    secondaryAction={
                      <Button onClick={() => {
                        request("/api/interaction/delete", "POST", {
                          "interaction_id": interaction.id
                        })
                          .then(() => {

                          })
                          .catch(() => {

                          })
                      }}>
                        删除
                      </Button>
                    }
                  >
                    <ListItemButton onClick={() => { setIsEditMode(true); setSelectedInteractionIdx(idx); setEditMode("update") }}>
                      <ListItemAvatar>
                        <Avatar style={{ backgroundColor: ColorList[idx % ColorList.length] }} sizes='large'> {interaction.sender.name[0]} </Avatar>
                      </ListItemAvatar>
                      {interaction.sender.name}
                    </ListItemButton>
                  </ListItem>
                )
                )}
              </List>
              <Spin spinning={loading}>
                <Button style={{ width: "50%" }} onClick={() => {
                  launch(); setLoading(true);
                }}>
                  开始一轮自动交互
                </Button>
                <Button style={{ width: "50%" }} onClick={() => { setIsEditMode(true); setEditMode("create") }}> 创建新交互 </Button>
              </Spin>
            </>
        }
      </>
    </MyDialog>
  )
}

export default AutoInteraction;