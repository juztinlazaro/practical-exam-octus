import { Action } from "@ngrx/store";
import * as TYPES from "./contact.types";
import { Contacts } from "src/app/common/model/contacts.model";

export class AddContact implements Action {
  readonly type = TYPES.ADD_CONTACT;
  constructor(public payload: Contacts) {}
}

export class AddContactSuccess implements Action {
  readonly type = TYPES.ADD_CONTACT_SUCCESS;
  constructor(public payload: Contacts) {}
}

export class AddContactError implements Action {
  readonly type = TYPES.ADD_CONTACT_ERROR;
  constructor(public payload: Error) {}
}

export class DeleteContact implements Action {
  readonly type = TYPES.DELETE_CONTACT;
  constructor(public payload: { email: string }) {}
}

export class DeleteContactSuccess implements Action {
  readonly type = TYPES.DELETE_CONTACT_SUCCESS;
  constructor(public payload: Contacts) {}
}

export class DeleteContactError implements Action {
  readonly type = TYPES.DELETE_CONTACT_ERROR;
  constructor(public payload: Error) {}
}

export type ContactActions =
  | AddContact
  | AddContactSuccess
  | AddContactError
  | DeleteContact
  | DeleteContactSuccess
  | DeleteContactError;
