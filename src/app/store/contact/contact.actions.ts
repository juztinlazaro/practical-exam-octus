import { Action } from "@ngrx/store";
import * as TYPES from "./contact.types";
import { Contacts } from "src/app/common/model/contacts.model";

export class AddContact implements Action {
  readonly type = TYPES.ADD_CONTACT;
  payload: Contacts;
}
