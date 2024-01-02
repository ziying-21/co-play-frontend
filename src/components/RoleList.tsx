import { Dispatch, SetStateAction, useState } from 'react';
import MyDialog from './MyDialog';
import RoleAgent from "@/class/RoleAgent";
import List from '@mui/material/List';
import { Avatar, Button, ListItem, ListItemAvatar, ListItemButton } from '@mui/material';
import { ColorList } from '@/utils/utils';
import EditRole from './EditRole';

interface RoleListProps {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  roles: RoleAgent[];
  story_id: number;
}

const RoleList = (props: RoleListProps) => {
  const [singleRoleMode, setSingleRoleMode] = useState(false);
  const [selectedRoleIdx, setSelectedRoleIdx] = useState(0);
  const onOK = () => {
    if (singleRoleMode) {
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
    <MyDialog open={props.open} setOpen={props.setOpen} title={'角色列表 - 查看角色并编辑'} onOK={onOK} onClose={onClose} okText={singleRoleMode?"回到角色列表":"确定"}>
      {singleRoleMode ?
        <EditRole mode='update' info={props.roles[selectedRoleIdx]} story_id={props.story_id} refresh={props.refresh} setRefresh={props.setRefresh} setOpen={props.setOpen} /> :
        <List dense>
          {props.roles.map((role, idx) => (
            <ListItem
              key={idx}
              secondaryAction={
                <Button onClick={() => {setSingleRoleMode(true); setSelectedRoleIdx(idx);}}>
                  查看
                </Button>
              }
            >
              <ListItemButton onClick={() => {setSingleRoleMode(true); setSelectedRoleIdx(idx);}}>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: ColorList[idx % ColorList.length] }} sizes='large'> {role.name[0]} </Avatar>
                </ListItemAvatar>
                {role.name}
              </ListItemButton>
            </ListItem>
          )
          )}
        </List>
      }
    </MyDialog>
  )
}

export default RoleList;