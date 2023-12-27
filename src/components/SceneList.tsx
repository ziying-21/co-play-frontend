import { Dispatch, SetStateAction } from 'react';
import MyDialog from './MyDialog';
import SceneAgent from '@/class/SceneAgent';

interface SceneListProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  scenes: SceneAgent[];
}

const SceneList = (props: SceneListProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'场景列表 - 查看场景并编辑'} onOK={onOK} okText="确定">
      {props.scenes.map((scene, idx) => (
          <p>{scene.place}</p>
        )
      )}
    </MyDialog>
  )
}

export default SceneList;