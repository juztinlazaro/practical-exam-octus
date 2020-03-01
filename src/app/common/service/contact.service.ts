import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export class ContactService {
  constructor() {}

  addContact(payload) {
    console.log(payload);
    return of("dummy").pipe(delay(1000));
    // return Promise.resolve(!!localStorage.getItem("token"));
    // return setTimeout(() => {
    //   console.log("test");
    // }, 3000);
  }
}
