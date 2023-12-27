import RoleAgent from "@/class/RoleAgent";
import SceneAgent from "@/class/SceneAgent";
import Timestep from "@/class/Timestep";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { useState } from "react";
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HouseIcon from '@mui/icons-material/House';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TimestepInfo from "./TimestepInfo";
import RoleList from "./RoleList";
import SceneList from "./SceneList";
import { Card, CardContent, CardHeader, IconButton, Menu, MenuItem } from "@mui/material";
import CreateRole from "./CreateRole";
import CreateScene from "./CreateScene";
import CreateTimestep from "./CreateTimestep";
import { Result } from "antd";

interface StoryProps {
  id: any;
  title: string;
  role: RoleAgent[];
  scene: SceneAgent[];
  timesteps: Timestep[];
}


const Story = (props: StoryProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [sceneDialogOpen, setSceneDialogOpen] = useState(false);
  const [createRoleDialogOpen, setCreateRoleDialogOpen] = useState(false);
  const [createSceneDialogOpen, setCreateSceneDialogOpen] = useState(false);
  const [createTimestepDialogOpen, setCreateTimestepDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card variant="outlined" style={{ border: "none" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClick} id="more-list">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'more-list',
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={() => { handleClose(); setRoleDialogOpen(true) }}>查看角色列表</MenuItem>
          <MenuItem onClick={() => { handleClose(); setSceneDialogOpen(true); }}>查看场景列表</MenuItem>
        </Menu>
        <CardContent>
          {
            props.timesteps.length ?
              <>
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
                <br />
                <TimestepInfo
                  id={activeStep}
                  info={props.timesteps[activeStep]}
                />
              </>
              : <Result status="404" title="当前故事时间步为空" subTitle="请先创建时间步" />
          }
          <RoleList open={roleDialogOpen} setOpen={setRoleDialogOpen} roles={props.role}/>
          <SceneList open={sceneDialogOpen} setOpen={setSceneDialogOpen} scenes={props.scene}/>
          <CreateRole open={createRoleDialogOpen} setOpen={setCreateRoleDialogOpen} />
          <CreateScene open={createSceneDialogOpen} setOpen={setCreateSceneDialogOpen} />
          <CreateTimestep open={createTimestepDialogOpen} setOpen={setCreateTimestepDialogOpen} />

          <Box sx={{ '& > :not(style)': { m: 1 } }} >
            <Tooltip title="添加时间步">
              <Fab aria-label="AddTimestep" style={{ position: 'fixed', right: 268, bottom: 16 }}
                onClick={() => { setCreateTimestepDialogOpen(true); }}
              >
                <AccessTimeIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="添加角色">
              <Fab aria-label="AddRole" style={{ position: 'fixed', right: 184, bottom: 16 }}
                onClick={() => { setCreateRoleDialogOpen(true); }}
              >
                <PersonAddIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="添加场景">
              <Fab aria-label="AddScene" style={{ position: 'fixed', right: 100, bottom: 16 }}
                onClick={() => { setCreateSceneDialogOpen(true); }}
              >
                <HouseIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="生成情节">
              <Fab color="primary" aria-label="Generate" style={{ position: 'fixed', right: 16, bottom: 16 }}>
                <SmartToyIcon />
              </Fab>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </>
  )
};

export default Story;