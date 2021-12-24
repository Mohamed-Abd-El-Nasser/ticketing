import { Subjects } from "./subjects";

export interface TicketCeratedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
