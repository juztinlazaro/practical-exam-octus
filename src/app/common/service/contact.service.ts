import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export class ContactService {
  constructor() {}

  addContact(payload) {
    console.log(payload);
    return of(payload).pipe(delay(1000));
  }
}
