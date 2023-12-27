import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { red } from '@mui/material/colors';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import RoleInfo from "./RoleInfo";
import { useState } from "react";

interface TimestepInfoProps {
  id: number;
  title: string;
  related_scene: SceneAgent;
  related_role: RoleAgent[];
}

const TimestepInfo = (props: TimestepInfoProps) => {

  const [roleInfoOpen, setRoleInfoOpen] = useState(false);
  const [selectedRoleIdx, setSelectedRoleIdx] = useState(-1);
  const [sceneInfoOpen, setSceneInfoOpen] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: "100%", height: "60vh"}} variant="outlined" style={{border: "none"}}>
        <CardHeader
          sx = {{height: "10%"}}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.id + 1}
            </Avatar>
          }
          title={
            <Typography variant="h5">
              {props.title}
            </Typography>
          }
        />
        <CardContent style={{height: "100%"}}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <Card  sx = {{ height:"100%" }}>
                <CardContent >
                  <Typography variant="h5" style={{textAlign: "center"}}>
                    关联角色:
                  </Typography>
                    {props.related_role.map((role, index) => (
                      <Typography variant="h5" key={index}  style={{textAlign: "center"}}>
                        <Button onClick={() => {setSelectedRoleIdx(index); setRoleInfoOpen(true)}}> {role.name} </Button>
                      </Typography>
                    ))}
                  <Button style={{width: "100%"}}> 编辑角色 </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} md={4}>
              <Card sx = {{ height:"100%" }}>
                <CardContent>
                  <Typography variant="h5" style={{textAlign: "center"}}>
                    关联场景:
                  </Typography>
                  <Typography variant="body1">  时间: {props.related_scene.time} </Typography>
                  <Typography variant="body1">  地点: {props.related_scene.place} </Typography>
                  <Typography variant="body1">  气氛: {props.related_scene.atmosphere} </Typography>
                  <Typography variant="body1">  视觉: {props.related_scene.vision} </Typography>
                  <Typography variant="body1">  听觉: {props.related_scene.hearing} </Typography>
                  <Typography variant="body1">  嗅觉: {props.related_scene.olfaction} </Typography>
                  <Typography variant="body1">  其他信息: {props.related_scene.otherInformation} </Typography>
                  <Button style={{width: "100%"}}> 编辑场景 </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} md={4}>
              <Card sx = {{ height:"100%" }}>
                <CardContent>
                  <Typography variant="h5" style={{textAlign: "center"}}>
                    交互列表:
                  </Typography>
                  {props.related_role.map((role, index) => (
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
      <RoleInfo open={roleInfoOpen} setOpen={setRoleInfoOpen} info={props.related_role[selectedRoleIdx]} />
    </>
  )
};

export default TimestepInfo;