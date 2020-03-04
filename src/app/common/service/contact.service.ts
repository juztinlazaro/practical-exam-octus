import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export class ContactService {
  constructor() {}

  addContact(payload) {
    return of(payload).pipe(delay(1000));
  }

  deleteContact(payload: { email: string }) {
    return of(payload).pipe(delay(1000));
  }
}
