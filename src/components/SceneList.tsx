import { Dispatch, SetStateAction, useState } from 'react';
import MyDialog from './MyDialog';
import SceneAgent from '@/class/SceneAgent';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemButton } from '@mui/material';
import { ColorList } from '@/utils/utils';
import EditScene from './EditScene';

interface SceneListProps {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
  story_id: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  scenes: SceneAgent[];
}

const SceneList = (props: SceneListProps) => {
  const [singleSceneMode, setSingleRoleMode] = useState(false);
  const [selectedSceneIdx, setSelectedSceneIdx] = useState(0);
  const onOK = () => {
    if (singleSceneMode) {
      setSingleRoleMode(false);
    } else {
      props.setOpen(false);
    }
  }
  const onClose = () => {
    setSingleRoleMode(false);
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onClose={onClose} title={singleSceneMode? props.scenes[selectedSceneIdx].place : '场景列表 - 查看场景并编辑'} onOK={onOK} okText={singleSceneMode?"回到场景列表":"确定"}>
      {singleSceneMode ?
        <EditScene mode='update' info={props.scenes[selectedSceneIdx]} story_id={props.story_id} refresh={props.refresh} setRefresh={props.setRefresh} /> :
        <List dense>
          {props.scenes.map((scene, idx) => (
            <ListItem
              key={idx}
              secondaryAction={
                <Button onClick={() => {setSingleRoleMode(true); setSelectedSceneIdx(idx);}}>
                  查看
                </Button>
              }
            >
              <ListItemButton onClick={() => {setSingleRoleMode(true); setSelectedSceneIdx(idx);}}>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: ColorList[idx % ColorList.length] }} sizes='large'> {scene.place[0]} </Avatar>
                </ListItemAvatar>
                {scene.place}
              </ListItemButton>
            </ListItem>
          )
          )}
        </List>
      }
    </MyDialog>
  )
}

export default SceneList;