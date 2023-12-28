import Timestep from "@/class/Timestep";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

interface EditTimestepProps {
  mode: "create" | "update";
  info?: Timestep;
};

const EditTimestep = (props: EditTimestepProps) => {
  return (
    <>
      <TextField label="标题" variant="outlined" fullWidth defaultValue={props.info?.title}/>
      <br /><br />
      <FormControl fullWidth>
        <InputLabel id="scene">选择该时间步发生的场景</InputLabel>
        <Select label="选择该时间步发生的场景" labelId="scene" defaultValue={props.info?.related_scene}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <InputLabel id="role">选择该时间步关联的角色</InputLabel>
        <Select label="选择该时间步关联的角色" labelId="role"  multiple defaultValue={[]}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br /><br />
      <Button fullWidth> 确认当前编辑 </Button>
    </>
  )
}

export default EditTimestep;