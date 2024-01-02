import ChatTurn from "@/class/ChatTurn";
import RoleAgent from "@/class/RoleAgent";
import { Avatar, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemButton, Paper } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { request } from "@/utils/network";
import { Spin } from "antd";

interface ChatProps {
  role: RoleAgent;
  story_id: number;
}

const Chat = (props: ChatProps) => {
  const [chatTurns, setChatTurns] = useState<ChatTurn[]>([
    new ChatTurn("role", "你好，有什么可以帮助你的吗？"),
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const communicate = async (dialog: ChatTurn[]) => {
    request("/api/role/communicate", "POST", {
      role_id: props.role.id,
      story_id: props.story_id,
      dialog: dialog
    })
    .then((response) => {
      const newDialog = response.data.dialog;
      setChatTurns(newDialog)
    })
    .catch(() => {})
    .finally(() => {setLoading(false);})
  }

  
  return (
    <>
      <Spin spinning={loading}>
        <List dense>
          {chatTurns.map((turn, idx) => (
            <ListItem key={idx}>
              <ListItemButton onClick={() => { }}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 30, height: 30, fontSize: 18 }} style={{ backgroundColor: turn.sender == "user" ? deepOrange[500] : green[500] }}>
                    {turn.sender == "user" ? "你" : props.role.name[0]}
                  </Avatar>
                </ListItemAvatar>
                {turn.message}
              </ListItemButton>
            </ListItem>
          )
          )}
        </List>
      </Spin>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="输入与角色对话"
          value={text}
          onChange={(e) => {setText(e.target.value)}}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" onClick={() => {
          if (text != "") {
            const newDialog = [...chatTurns, new ChatTurn("user", text)]
            setChatTurns(newDialog);
            setLoading(true);
            setText("");
            communicate(newDialog);
          }
        }}>
          <SendIcon />
        </IconButton>
      </Paper>
    </>
  )
}

export default Chat;