import { SetStateAction, MouseEvent, Dispatch, useState } from "react";
import MyDialog from "./MyDialog";
import { Button, FormControl, TextField } from "@mui/material";
import { Spin } from "antd";
import { request } from "@/utils/network";

interface GenerateProps {
  refresh: boolean;
  setRefresh: Dispatch<SetStateAction<boolean>>;
  story_id: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  timestep_id: number;
}

const Generate = (props: GenerateProps) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const onOK = () => {
    props.setOpen(false);
  }
  const generate = async () => {
    request("/api/story/generate", "POST", {
      story_id: props.story_id,
      timestep_id: props.timestep_id
    })
      .then((response) => {
        setText(response.data.story);
      })
      .catch(() => { })
      .finally(() => { setLoading(false); })
  }

  return (
    <MyDialog open={props.open} setOpen={props.setOpen} onOK={onOK} onClose={onOK} okText={"取消"} title={"自动生成故事文本"}>
      <Spin spinning={loading} tip="生成速度较慢，请耐心等待">
        {/* <FormControl fullWidth>
          <TextField label="请在这里输入故事生成时的额外要求额外要求" variant="outlined"/>
        </FormControl> */}
        <p> {text} </p>
        <Button fullWidth onClick={() => { setLoading(true); generate(); }}> 开始生成 </Button>
      </Spin>
    </MyDialog>
  )
}

export default Generate;