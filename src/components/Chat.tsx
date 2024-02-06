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
    new ChatTurn("user", "你好，我知道您刚刚申请到了斯坦福大学的PhD学位，请问你有什么感受吗？"),
    new ChatTurn("role", "作为一个清华大学计算机系的学生成功申请到斯坦福大学的PhD，我感到非常激动和自豪。这是一个巨大的荣誉，也代表着我在学术领域和研究方面的努力和成就得到了认可。\n首先，我会感到对清华大学计算机系的教育和培养感激。清华是一所在计算机科学领域有着卓越声誉的学府，它为我提供了坚实的理论基础和丰富的实践经验，为我在申请斯坦福的过程中提供了有力的支持。\n其次，我会对斯坦福大学的录取感到非常兴奋。斯坦福是世界上顶尖的大学之一，尤其在计算机科学领域有着卓越的研究和创新成果。能够在这样一个学术氛围浓厚、资源丰富的环境中深造，将为我的学术生涯带来巨大的提升和发展机会。\n同时，我也会面临一些挑战，比如适应新的学术文化和生活环境。斯坦福和清华有着不同的教学和研究风格，因此我需要灵活调整自己的学术方法和工作习惯，适应新的团队合作和研究项目。\n总的来说，这是一个充满希望和机遇的时刻。我将以饱满的热情和责任心投入到斯坦福的学术生活中，努力追求更高的研究成就，同时保持对清华的深厚感情。"),
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