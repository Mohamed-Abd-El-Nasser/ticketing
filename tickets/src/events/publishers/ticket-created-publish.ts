import { Publisher, Subjects, TicketCeratedEvent } from "@mshtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCeratedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
