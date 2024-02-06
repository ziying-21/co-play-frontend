import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid, List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";
import RoleInfo from "./RoleInfo";
import { Dispatch, SetStateAction, useState } from "react";
import Timestep from "@/class/Timestep";
import SceneInfo from "./SceneInfo";
import CreateInteraction from "./CreateInteraction";
import { ColorList } from "@/utils/utils";
import InteractionInfo from "./InteractionInfo";
import EditInteraction from "./EditInteraction";

interface TimestepInfoProps {
  story_id: number;
  index: number;
  info: Timestep;
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

const TimestepInfo = (props: TimestepInfoProps) => {

  const [roleInfoOpen, setRoleInfoOpen] = useState(false);
  const [sceneInfoOpen, setSceneInfoOpen] = useState(false);
  const [interactionInfoOpen, setInterrInfoOpen] = useState(false);
  const [createInteractionInfoOpen, setCreateInterrInfoOpen] = useState(false);
  const [selectedRoleIdx, setSelectedRoleIdx] = useState(-1);
  const [selectedInteractionIdx, setSelectedInteractionIdx] = useState(-1);
  const info = props.info ? props.info : new Timestep();

  return (
    <>
      <Card sx={{ maxWidth: "100%" }} variant="outlined" style={{ border: "none" }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              {props.index + 1}
            </Avatar>
          }
          action={
            <Button aria-label="settings" onClick={() => { setSceneInfoOpen(true) }} id="more-list">
              查看场景
            </Button>
          }
          title={
            <Typography variant="h5">
              {info.title}
            </Typography>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Card>
                <CardContent >
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    关联角色:
                  </Typography>
                  <List dense>
                    {props.info.related_roles.map((role, idx) => (
                      <ListItem
                        key={idx}
                        secondaryAction={
                          <Button onClick={() => {setRoleInfoOpen(true); setSelectedRoleIdx(idx);}}>
                            查看
                          </Button>
                        }
                      >
                        <ListItemButton onClick={() => {setRoleInfoOpen(true); setSelectedRoleIdx(idx);}}>
                          <ListItemAvatar>
                            <Avatar style={{ backgroundColor: ColorList[idx % ColorList.length] }} sizes='large'> {role.name[0]} </Avatar>
                          </ListItemAvatar>
                          {role.name}
                        </ListItemButton>
                      </ListItem>
                    )
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    初始交互:
                  </Typography>
                  <br/>
                  <EditInteraction key={props.info.id} roles={props.info.related_roles} related_timestep_ids={props.info.id} mode={info.interactions.length ? "update" : "create"} info={info.interactions.length ? info.interactions[0] : undefined} story_id={props.story_id} fresh={props.refresh} setRefresh={props.setRefresh}/>
                  <br/>
                  {/* <Button style={{ width: "100%" }} onClick={() => {setCreateInterrInfoOpen(true)}}> 创建新交互 </Button> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <CreateInteraction open={createInteractionInfoOpen} setOpen={setCreateInterrInfoOpen} related_timestep_id={info.id} roles={info.related_roles} refresh={props.refresh} setRefresh={props.setRefresh}/>
      <InteractionInfo open={interactionInfoOpen} setOpen={setInterrInfoOpen} info={info.interactions[selectedInteractionIdx]} roles={info.related_roles} story_id={props.story_id} fresh={props.refresh} setRefresh={props.setRefresh}/>
      <RoleInfo open={roleInfoOpen} setOpen={setRoleInfoOpen} info={info.related_roles[selectedRoleIdx]} story_id={props.story_id} refresh={props.refresh} setRefresh={props.setRefresh} />
      <SceneInfo open={sceneInfoOpen} setOpen={setSceneInfoOpen} info={info.related_scene} story_id={props.story_id} refresh={props.refresh} setRefresh={props.setRefresh} />
    </>
  )
};

export default TimestepInfo;