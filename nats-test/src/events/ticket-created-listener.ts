import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { Subjects } from "./subjects";
import { TicketCeratedEvent } from "./ticket-created-event";

export class TicketCeratedListener extends Listener<TicketCeratedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "payments-service";
  onMessage(data: TicketCeratedEvent["data"], msg: Message) {
    console.log("Event data!", data);
    msg.ack();
  }
}
