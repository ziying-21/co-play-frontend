class ChatTurn {
  type: "assistant" | "user";
  description: string;
  constructor(
    type: "assistant" | "user" = "assistant",
    description: string = ""
  ) {
    this.type = type;
    this.description = description;
  }
}

export default ChatTurn;