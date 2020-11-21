import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@josechotickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
