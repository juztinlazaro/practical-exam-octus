import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { Observable, of, EMPTY } from "rxjs";
import { Action } from "@ngrx/store";
import * as TYPES from "./contact.types";
import {
  AddContactError,
  AddContactSuccess,
  AddContact,
  DeleteContactSuccess,
  DeleteContactError,
  DeleteContact,
  GetContact,
  GetContactSuccess,
  GetContactError
} from "./contact.actions";
import { Contacts } from "src/app/common/model/contacts.model";
import { ContactService } from "src/app/common/service/contact.service";

@Injectable()
export class ContactEffects {
  constructor(
    private actions: Actions,
    private router: Router,
    private contactService: ContactService
  ) {}

  @Effect()
  AddContact: Observable<Action> = this.actions.pipe(
    ofType(TYPES.ADD_CONTACT),
    map((action: AddContact) => action.payload),
    exhaustMap((payload: Contacts) => {
      return this.contactService.addContact(payload).pipe(
        map((response: any) => new AddContactSuccess(response)),
        catchError(error => of(new AddContactError(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  AddContactSuccess: Observable<Action> = this.actions.pipe(
    ofType(TYPES.ADD_CONTACT_SUCCESS),
    tap(response => {
      if (response) {
        this.router.navigateByUrl("");
      }
    })
  );

  @Effect({ dispatch: false })
  AddContactError: Observable<Action> = this.actions.pipe(
    ofType(TYPES.ADD_CONTACT_ERROR),
    tap(error => console.log(error))
  );

  @Effect()
  DeleteContact: Observable<Action> = this.actions.pipe(
    ofType(TYPES.DELETE_CONTACT),
    map((action: DeleteContact) => action.payload),
    exhaustMap((payload: { email: string }) => {
      return this.contactService.deleteContact(payload).pipe(
        map((response: any) => new DeleteContactSuccess(response)),
        catchError(error => of(new DeleteContactError(error)))
      );
    })
  );

  @Effect()
  GetContact: Observable<Action> = this.actions.pipe(
    ofType(TYPES.GET_CONTACT),
    map((action: GetContact) => action.payload),
    exhaustMap((payload: { email: string }) => {
      return this.contactService.getContact(payload).pipe(
        map((response: any) => new GetContactSuccess(response)),
        catchError(error => of(new GetContactError(error)))
      );
    })
  );
}
