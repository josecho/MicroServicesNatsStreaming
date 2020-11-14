import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@josechotickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
