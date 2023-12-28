import RoleAgent from "@/class/RoleAgent";
import { Button, TextField } from "@mui/material";

interface EditRoleProps {
  mode: 'create' | 'update';
  info?: RoleAgent;
}

const EditRole = (props: EditRoleProps) => {
  return (
    <>
      <TextField label="角色名称" variant="outlined" fullWidth defaultValue={props.info?.name}/>
      <br /><br />
      <TextField label="角色年龄(数字或描述，如30、三四十岁)" variant="outlined" fullWidth defaultValue={props.info?.age}/>
      <br /><br />
      <TextField label="角色性格(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.characters}/>
      <br /><br />
      <TextField label="角色爱好(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.preference}/>
      <br /><br />
      <TextField label="其他信息(可选)" variant="outlined" fullWidth multiline defaultValue={props.info?.otherInformation}/>
      <br /><br />
      <Button fullWidth> 确认当前编辑 </Button>
    </>
  )
}

export default EditRole;