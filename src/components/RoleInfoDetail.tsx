import RoleAgent from "@/class/RoleAgent";
import { Button, Typography } from "@mui/material";

interface RoleInfoDetailProps {
  info: RoleAgent;
}

const RoleInfoDetail = (props: RoleInfoDetailProps) => {
  return (
    <>
      <Typography variant="body1">  姓名: {props.info.name} </Typography>
      <Typography variant="body1">  年龄: {props.info.age} </Typography>
      <Typography variant="body1">  性格特征: {props.info.characters} </Typography>
      <Typography variant="body1">  偏好描述: {props.info.preference} </Typography>
      <Typography variant="body1">  其他信息: {props.info.otherInformation} </Typography>
      <Button style={{ width: "100%" }}> 编辑角色信息 </Button>
    </>
  )
}

export default RoleInfoDetail;