import Interraction from "@/class/Interraction";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

interface EditInterractionProps {
  mode: "create" | "update";
  info?: Interraction;
}

const EditInterraction = (props: EditInterractionProps) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="scene">选择交互类型</InputLabel>
        <Select label="选择交互类型" labelId="scene" defaultValue={props.info?.type}>
          <MenuItem value={"speech"}>语言</MenuItem>
          <MenuItem value={"movement"}>动作</MenuItem>
          <MenuItem value={"expression"}>神态</MenuItem>
          <MenuItem value={"emotion"}>心理</MenuItem>
          <MenuItem value={"others"}>其他</MenuItem>
        </Select>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <TextField label="描述" variant="outlined" defaultValue={props.info?.description} multiline/>
      </FormControl>
      <br /><br />
      <Button fullWidth> 确认当前编辑 </Button>
    </>
  )
}

export default EditInterraction;