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
  GetContactError,
  UpdateContact,
  UpdateContactError,
  UpdateContactSuccess,
  GetContactListSuccess,
  GetContactListError,
  GetContactList
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
      const getList = localStorage.getItem("contacts");
      if (getList) {
        const contacts = [...JSON.parse(getList), payload];
        localStorage.setItem("contacts", JSON.stringify(contacts));
      } else {
        localStorage.setItem("contacts", JSON.stringify([payload]));
      }

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
    exhaustMap((payload: { id: string }) => {
      const getList = localStorage.getItem("contacts");
      if (getList) {
        const contacts = [...JSON.parse(getList), payload].filter(item => {
          return item.id !== payload.id;
        });
        localStorage.setItem("contacts", JSON.stringify(contacts));
      } else {
        localStorage.setItem("contacts", JSON.stringify([payload]));
      }

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
    exhaustMap((payload: { id: string }) => {
      return this.contactService.getContact(payload).pipe(
        map((response: any) => new GetContactSuccess(response)),
        catchError(error => of(new GetContactError(error)))
      );
    })
  );

  @Effect()
  GetContactList: Observable<Action> = this.actions.pipe(
    ofType(TYPES.GET_CONTACT_LIST),
    map((action: GetContactList) => action.payload),
    exhaustMap(payload => {
      return this.contactService.getContactList(payload).pipe(
        map((response: any) => new GetContactListSuccess(response)),
        catchError(error => of(new GetContactListError(error)))
      );
    })
  );

  @Effect()
  UpdateContact: Observable<Action> = this.actions.pipe(
    ofType(TYPES.UPDATE_CONTACT),
    map((action: UpdateContact) => action.payload),
    exhaustMap(payload => {
      const getList = localStorage.getItem("contacts");
      console.log("payload", payload);
      console.log("getList", JSON.parse(getList));
      if (getList) {
        const contacts = JSON.parse(getList).map(item => {
          if (item.id === payload.id) {
            return payload;
          }

          return item;
        });
        console.log("contacts", contacts);
        localStorage.setItem("contacts", JSON.stringify(contacts));
      } else {
        localStorage.setItem("contacts", JSON.stringify([payload]));
      }

      return this.contactService.updateContact(payload).pipe(
        map((response: any) => new UpdateContactSuccess(response)),
        catchError(error => of(new UpdateContactError(error)))
      );
    })
  );
}
