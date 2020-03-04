import { Contacts } from "../common/model/contacts.model";

export interface RootStore {
  contacts: {
    contact: {};
    contacts: Contacts[];
    isLoading: boolean;
    error: any;
  };
}
