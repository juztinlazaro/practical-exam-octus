import { of } from "rxjs";
import { delay } from "rxjs/operators";

export class ContactService {
  constructor() {}

  getContactList(payload) {
    return of(payload).pipe(delay(1000));
  }

  getContact(payload) {
    return of(payload).pipe(delay(1000));
  }

  updateContact(payload) {
    return of(payload).pipe(delay(1000));
  }

  addContact(payload) {
    return of(payload).pipe(delay(1000));
  }

  deleteContact(payload: { id: string }) {
    return of(payload).pipe(delay(1000));
  }
}
