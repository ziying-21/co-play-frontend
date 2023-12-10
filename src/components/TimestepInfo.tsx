import SceneAgent from "@/class/SceneAgent";
import RoleAgent from "@/class/RoleAgent";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { Button, Grid } from "@mui/material";

interface TimestepInfoProps {
  id: number;
  title: string;
  related_scene: SceneAgent;
  related_role: RoleAgent[];
}

const TimestepInfo = (props: TimestepInfoProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.id + 1}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h5">
              {props.title}
            </Typography>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} height="50%">
              <Card>
                <CardContent>
                  <Typography variant="h5" style={{textAlign: "center"}}>
                    关联角色:
                  </Typography>
                  {props.related_role.map((role, index) => (
                      <Typography variant="h5" key={index}  style={{textAlign: "center"}}>
                        <Button> {role.name} </Button>
                      </Typography>
                    ))
                  }
                  <Button style={{width: "100%"}}> 编辑角色 </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} md={4} height="50%">
              <Card>
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
              <Card>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          
        </Collapse>
      </Card>
    </>
  )
};

export default TimestepInfo;