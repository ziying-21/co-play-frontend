class ChatTurn {
  sender: "role" | "user";
  message: string;
  constructor(
    sender: "role" | "user" = "user",
    message: string = ""
  ) {
    this.sender = sender;
    this.message = message;
  }
}

export default ChatTurn;