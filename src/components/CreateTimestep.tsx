import { Dispatch, SetStateAction } from "react";
import MyDialog from "./MyDialog";
import { FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

interface CreateTimeProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateTimestep = (props: CreateTimeProps) => {
  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建时间步'} onOK={onOK} okText="确定">
      <Typography gutterBottom>
        正在创建时间步，请按照下面的指引完成设定，然后可以进行故事创作
      </Typography>
      <TextField label="标题" variant="outlined" fullWidth/>
      <br/><br/>
      <FormControl fullWidth>
      <InputLabel id="scene">选择该时间步发生的场景</InputLabel>
      <Select label="选择该时间步发生的场景" labelId="scene">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      </FormControl>
      <br/><br/>
      <FormControl fullWidth>
        <InputLabel id="role">选择该时间步关联的角色</InputLabel>
        <Select label="选择该时间步关联的角色" labelId="role" multiple value={[]}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br/><br/>
    </MyDialog>
  )
};

export default CreateTimestep;