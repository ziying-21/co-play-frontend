import RoleAgent from "@/class/RoleAgent";
import SceneAgent from "@/class/SceneAgent";
import Timestep from "@/class/Timestep";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { useState } from "react";
import { red } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HouseIcon from '@mui/icons-material/House';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Typography from "@mui/material/Typography";
import Tooltip from '@mui/material/Tooltip';
import Card from "@mui/material/Card";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Button, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";

interface StoryProps {
  id: any;
  role: RoleAgent[];
  scene: SceneAgent[];
  timesteps: Timestep[];
}

const Story = (props: StoryProps) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Typography variant="h5"> 故事ID: {props.id} </Typography>
      <br/>
      <Typography variant="body1"> 情节时间线: </Typography>
      <br/>
      {/* <p>角色列表: {props.role[0].age}</p>
      <p>场景列表: {props.scene[0].hearing}</p> */}
      <Stepper nonLinear activeStep={activeStep}>
        {props.timesteps.map((label, index) => (
          <Step key={label.id}>
            <StepButton color="inherit" onClick={() => {
              setActiveStep(index);
            }}>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <br/>
      {/* <TimestepInfo id={props.timesteps[activeStep].id} 
        title={props.timesteps[activeStep].title}
        related_scene={props.timesteps[activeStep].related_scene} 
        related_role={props.timesteps[activeStep].related_role}
      /> */}
      <Card sx={{ maxWidth: "100%", height: "60vh"}}>
        <CardHeader
          sx = {{height: "10%"}}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.timesteps[activeStep].id + 1}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h5">
              {props.timesteps[activeStep].title}
            </Typography>
          }
        />
        <CardContent style={{height: "90%"}}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <Card  sx = {{ height:"100%" }}>
                <CardContent sx={{maxHeight: "100%"}}>
                  <Typography variant="h5" style={{textAlign: "center"}}>
                    关联角色:
                  </Typography>
                  {props.timesteps[activeStep].related_role.map((role, index) => (
                      <Typography variant="h5" key={index}  style={{textAlign: "center"}}>
                        <Button> {role.name} </Button>
                      </Typography>
                    ))
                  }
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
                  <Typography variant="body1">  时间: {props.timesteps[activeStep].related_scene.time} </Typography>
                  <Typography variant="body1">  地点: {props.timesteps[activeStep].related_scene.place} </Typography>
                  <Typography variant="body1">  气氛: {props.timesteps[activeStep].related_scene.atmosphere} </Typography>
                  <Typography variant="body1">  视觉: {props.timesteps[activeStep].related_scene.vision} </Typography>
                  <Typography variant="body1">  听觉: {props.timesteps[activeStep].related_scene.hearing} </Typography>
                  <Typography variant="body1">  嗅觉: {props.timesteps[activeStep].related_scene.olfaction} </Typography>
                  <Typography variant="body1">  其他信息: {props.timesteps[activeStep].related_scene.otherInformation} </Typography>
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
                  {props.timesteps[activeStep].related_role.map((role, index) => (
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
      <Box sx={{ '& > :not(style)': { m: 1 } }} >
        <Tooltip title="添加时间步">
          <Fab aria-label="AddTimestep" style={{position: 'absolute', right: 268, bottom: 16}}>
            <AccessTimeIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="添加角色">
          <Fab aria-label="AddRole" style={{position: 'absolute', right: 184, bottom: 16}}>
            <PersonAddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="添加场景">
          <Fab aria-label="AddScene" style={{position: 'absolute', right: 100, bottom: 16}}>
            <HouseIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="生成情节">
          <Fab color="primary" aria-label="Generate" style={{position: 'absolute', right: 16, bottom: 16}}>
            <SmartToyIcon />
          </Fab>
        </Tooltip>
      </Box>
    </>
  )
};

export default Story;