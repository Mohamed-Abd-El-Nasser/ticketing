import { Publisher } from "./base-publisher";
import { TicketCeratedEvent } from "./ticket-created-event";
import { Subjects } from "./subjects";

export class TicketCreatedPublisher extends Publisher<TicketCeratedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
