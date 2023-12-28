import RoleAgent from "@/class/RoleAgent";

interface ChatProps {
  role: RoleAgent;
}

const Chat = (props: ChatProps) => {
  return (
    <> Chat with {props.role.name} </>
  )
}

export default Chat;