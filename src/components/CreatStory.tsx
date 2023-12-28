import { Dispatch, SetStateAction, useState } from "react";
import MyDialog from "./MyDialog";
import { Button, TextField, Typography } from "@mui/material";
import { request } from "@/utils/network";
import { message } from "antd";
import { useRouter } from "next/router";

interface CreateStoryProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateStory = (props: CreateStoryProps) => {

  const [title, setTitle] = useState("");
  const [bigBackground, setBigBackground] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    if (title == "") {
      message.warning("故事标题不得为空");
      return;
    }
    request("/api/story/create", "POST", {
        "title": title,
        "big_background": bigBackground,
      })
      .then((response) => {
        router.push(`/${response.data.id}`)
        message.success("任务创建成功")
      })
      .catch(() => {
        message.error("任务创建失败")
      })
  }

  const onOK = () => {
    props.setOpen(false);
  }
  return (
    <MyDialog open={props.open} setOpen={props.setOpen} title={'创建一个新故事'} onOK={onOK} onClose={onOK} okText="取消">
      <>
        <Typography variant="body1">
          正在创建您的故事，请按照下面的指引完成故事的初始设定，然后进行创作
        </Typography>
        <br/>
        <TextField label="故事标题(必填)" variant="outlined" fullWidth onChange={(e) => {setTitle(e.target.value);}}/>
        <br/><br/>
        <TextField label="初始背景设置(可选，也可以稍后设置)" variant="outlined" fullWidth multiline onChange={(e) => {setBigBackground(e.target.value);}}/>
        <br /><br />
        <Button fullWidth onClick={onSubmit}> 确认当前编辑 </Button>
      </>
    </MyDialog>
  )
};

export default CreateStory;