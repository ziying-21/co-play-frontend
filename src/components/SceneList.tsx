import { Dispatch, SetStateAction } from 'react';
import MyDialog from './MyDialog';
import Typography from '@mui/material/Typography';

interface SceneListProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SceneList = (props: SceneListProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'场景列表 - 查看场景并编辑'} onOK={onOK}>
      <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Typography>
    </MyDialog>
  )
}

export default SceneList;