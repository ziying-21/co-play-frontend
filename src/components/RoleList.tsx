import { Dispatch, SetStateAction, useState } from 'react';
import MyDialog from './MyDialog';
import RoleAgent from "@/class/RoleAgent";
import List from '@mui/material/List';
import { Avatar, Button, ListItem, ListItemAvatar, ListItemButton } from '@mui/material';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import { ColorList } from '@/utils/utils';
import RoleInfoDetail from './RoleInfoDetail';


interface RoleListProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  roles: RoleAgent[];
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
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'角色列表 - 查看角色并编辑'} onOK={onOK} okText={singleRoleMode?"回到角色列表":"确定"}>
      {singleRoleMode ?
        <RoleInfoDetail info={props.roles[selectedRoleIdx]} /> :
        <List dense>
          {props.roles.map((role, idx) => (
            <ListItem
              key={idx}
              secondaryAction={
                <Button onClick={() => {setSingleRoleMode(true)}}>
                  查看
                </Button>
              }
            >
              <ListItemButton onClick={() => {setSingleRoleMode(true)}}>
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