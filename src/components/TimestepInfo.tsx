import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid, List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";
import RoleInfo from "./RoleInfo";
import { useState } from "react";
import Timestep from "@/class/Timestep";
import SceneInfo from "./SceneInfo";
import CreateInteraction from "./CreateInteraction";
import { ColorList } from "@/utils/utils";
import InteractionInfo from "./InteractionInfo";

interface TimestepInfoProps {
  id: number;
  info: Timestep
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
              {props.id + 1}
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
                    {props.info.related_role.map((role, idx) => (
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
                    交互列表:
                  </Typography>
                  {
                    info.related_interaction.length ?
                    <List dense>
                      {props.info.related_interaction.map((interaction, idx) => (
                        <ListItem
                          key={idx}
                          secondaryAction={
                            <Button onClick={() => {setInterrInfoOpen(true); setSelectedInteractionIdx(idx);}}>
                              查看
                            </Button>
                          }
                        >
                          <ListItemButton onClick={() => {setInterrInfoOpen(true); setSelectedInteractionIdx(idx);}}>
                            <ListItemAvatar>
                              <Avatar style={{ backgroundColor: ColorList[idx % ColorList.length] }} sizes='large'> {interaction.type[0]} </Avatar>
                            </ListItemAvatar>
                            {interaction.type}
                          </ListItemButton>
                        </ListItem>
                      )
                      )}
                    </List>
                      :
                      <>
                        <br/>
                        <Typography variant="body1" style={{ textAlign: "center" }}>
                          这里空空如也，请先创建初始交互
                        </Typography>
                      </>
                  }
                  <br/>
                  <Button style={{ width: "100%" }} onClick={() => {setCreateInterrInfoOpen(true)}}> 创建新交互 </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <CreateInteraction open={createInteractionInfoOpen} setOpen={setCreateInterrInfoOpen}/>
      <InteractionInfo open={interactionInfoOpen} setOpen={setInterrInfoOpen} info={info.related_interaction[selectedInteractionIdx]}/>
      <RoleInfo open={roleInfoOpen} setOpen={setRoleInfoOpen} info={info.related_role[selectedRoleIdx]} />
      <SceneInfo open={sceneInfoOpen} setOpen={setSceneInfoOpen} info={info.related_scene} />
    </>
  )
};

export default TimestepInfo;