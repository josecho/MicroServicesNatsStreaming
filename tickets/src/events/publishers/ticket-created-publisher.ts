import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@josechotickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
