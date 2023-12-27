import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { red } from '@mui/material/colors';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import RoleInfo from "./RoleInfo";
import { useState } from "react";
import Timestep from "@/class/Timestep";
import SceneInfo from "./SceneInfo";

interface TimestepInfoProps {
  id: number;
  info: Timestep
}

const TimestepInfo = (props: TimestepInfoProps) => {

  const [roleInfoOpen, setRoleInfoOpen] = useState(false);
  const [sceneInfoOpen, setSceneInfoOpen] = useState(false);
  const [selectedRoleIdx, setSelectedRoleIdx] = useState(-1);
  
  const info = props.info ? props.info : new Timestep();

  return (
    <>
      <Card sx={{ maxWidth: "100%" }} variant="outlined" style={{border: "none"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.id + 1}
            </Avatar>
          }
          action={
            <Button aria-label="settings" onClick={() => {setSceneInfoOpen(true)}} id="more-list">
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
                  <Typography variant="h5" style={{textAlign: "center"}}>
                    关联角色:
                  </Typography>
                    {info.related_role.map((role, index) => (
                      <Typography variant="h5" key={index}  style={{textAlign: "center"}}>
                        <Button onClick={() => {setSelectedRoleIdx(index); setRoleInfoOpen(true)}}> {role.name} </Button>
                      </Typography>
                    ))}
                  <Button style={{width: "100%"}}> 编辑角色 </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" style={{textAlign: "center"}}>
                    交互列表:
                  </Typography>
                  {
                    info.related_role.map((role, index) => (
                      <Typography variant="h5" key={index}  style={{textAlign: "center"}}>
                        <Button> {role.name} </Button>
                      </Typography>
                    ))
                  }
                  <Button style={{width: "100%"}}> 编辑交互 </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <RoleInfo open={roleInfoOpen} setOpen={setRoleInfoOpen} info={info.related_role[selectedRoleIdx]} />
      <SceneInfo open={sceneInfoOpen} setOpen={setSceneInfoOpen} info={info.related_scene} />
    </>
  )
};

export default TimestepInfo;