import ChatTurn from "@/class/ChatTurn";
import RoleAgent from "@/class/RoleAgent";
import { Avatar, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemButton, Paper, TextField } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

interface ChatProps {
  role: RoleAgent;
}

const Chat = (props: ChatProps) => {
  const [chatTurns, setChatTurns] = useState<ChatTurn[]>([
    new ChatTurn("assistant", "你好，有什么可以帮助你的吗？你好，有什么可以帮助你的吗？你好，有什么可以帮助你的吗？你好，有什么可以帮助你的吗？你好，有什么可以帮助你的吗？"),
    // new ChatTurn("user", "你好，我想和你交谈"),
    // new ChatTurn("assistant", "你好，有什么可以帮助你的吗？"),
    // new ChatTurn("user", "你好，我想和你交谈"),
    // new ChatTurn("assistant", "你好，有什么可以帮助你的吗？"),
    // new ChatTurn("user", "你好，我想和你交谈"),
    // new ChatTurn("assistant", "你好，有什么可以帮助你的吗？"),
    // new ChatTurn("user", "你好，我想和你交谈"),
    // new ChatTurn("assistant", "你好，有什么可以帮助你的吗？"),
    // new ChatTurn("user", "你好，我想和你交谈"),
    // new ChatTurn("assistant", "你好，有什么可以帮助你的吗？"),
    // new ChatTurn("user", "你好，我想和你交谈"),
    // new ChatTurn("assistant", "你好，有什么可以帮助你的吗？"),
    // new ChatTurn("user", "你好，我想和你交谈"),
  ]);
  return (
    <>
      <>
        <List dense>
          {chatTurns.map((turn, idx) => (
            <ListItem key={idx}>
              <ListItemButton onClick={() => { }}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 30, height: 30, fontSize: 18 }} style={{ backgroundColor: turn.type == "user" ? deepOrange[500] : green[500] }}>
                    {turn.type == "user" ? "你" : props.role.name[0]}
                  </Avatar>
                </ListItemAvatar>
                {turn.description}
              </ListItemButton>
            </ListItem>
          )
          )}
        </List>
      </>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="输入与角色对话"
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Paper>
    </>
  )
}

export default Chat;