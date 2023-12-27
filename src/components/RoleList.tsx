import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from 'react';
import MyDialog from './MyDialog';

interface RoleListProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const RoleList = (props: RoleListProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'角色列表 - 查看角色并编辑'} onOK={onOK}>
      <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Typography>
    </MyDialog>
  )
}

export default RoleList;