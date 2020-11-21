import { Publisher, OrderCreatedEvent, Subjects } from '@josechotickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
