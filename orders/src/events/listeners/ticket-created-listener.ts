import { Message } from "node-nats-streaming";
import { Subjects, Listener, TicketCeratedEvent } from "@mshtickets/common";
import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<TicketCeratedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCeratedEvent["data"], msg: Message) {
    const { id, title, price } = data;

    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
