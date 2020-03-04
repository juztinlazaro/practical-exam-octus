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

export class GetContact implements Action {
  readonly type = TYPES.GET_CONTACT;
  constructor(public payload: { email: string }) {}
}

export class GetContactSuccess implements Action {
  readonly type = TYPES.GET_CONTACT_SUCCESS;
  constructor(public payload) {}
}

export class GetContactError implements Action {
  readonly type = TYPES.GET_CONTACT_ERROR;
  constructor(public payload) {}
}

export class UpdateContact implements Action {
  readonly type = TYPES.UPDATE_CONTACT;
  constructor(public payload) {}
}

export class UpdateContactSuccess implements Action {
  readonly type = TYPES.UPDATE_CONTACT_SUCCESS;
  constructor(public payload) {}
}

export class UpdateContactError implements Action {
  readonly type = TYPES.UPDATE_CONTACT_ERROR;
  constructor(public payload) {}
}

export class GetContactList implements Action {
  readonly type = TYPES.GET_CONTACT_LIST;
  constructor(public payload: { email: string }) {}
}

export class GetContactListSuccess implements Action {
  readonly type = TYPES.GET_CONTACT_LIST_SUCCESS;
  constructor(public payload) {}
}

export class GetContactListError implements Action {
  readonly type = TYPES.GET_CONTACT_LIST_ERROR;
  constructor(public payload) {}
}

export type ContactActions =
  | AddContact
  | AddContactSuccess
  | AddContactError
  | DeleteContact
  | DeleteContactSuccess
  | DeleteContactError
  | GetContact
  | GetContactError
  | GetContactSuccess
  | GetContactList
  | GetContactListSuccess
  | GetContactListError
  | UpdateContact
  | UpdateContactSuccess
  | UpdateContactError;
