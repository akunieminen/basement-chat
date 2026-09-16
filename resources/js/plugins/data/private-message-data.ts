import MessageType from "../enums/message-type";
import type { PrivateMessage } from "../types/api";
import DateFormatter from "../utils/date-formatter";

class PrivateMessageData {
  public constructor(
    public readonly id: number,
    public readonly receiverId: number,
    public readonly senderId: number,
    public readonly type: MessageType,
    public readonly value: string,
    public readonly createdAt: DateFormatter,
    public readAt: DateFormatter,
  ) {}

  public setReadAtTime(time: string): void {
    this.readAt = new DateFormatter(new Date(time));
  }

  public static from(message: PrivateMessage): PrivateMessageData {
    return new this(
      message.id,
      message.receiver_id,
      message.sender_id,
      MessageType[
        {
          DOCUMENT: "Document",
          TEXT: "Text",
        }[message.type] as keyof typeof MessageType
      ],
      message.value,
      new DateFormatter(new Date(message.created_at)),
      new DateFormatter(
        message.read_at !== null ? new Date(message.read_at) : null,
      ),
    );
  }
}

export default PrivateMessageData;
