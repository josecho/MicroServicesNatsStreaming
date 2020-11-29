import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@josechotickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
