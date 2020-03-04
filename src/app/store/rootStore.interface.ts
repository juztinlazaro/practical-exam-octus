import { Contacts } from "../common/model/contacts.model";

export interface RootStore {
  contacts: {
    contacts: Contacts[];
    isLoading: boolean;
    error: any;
  };
}
