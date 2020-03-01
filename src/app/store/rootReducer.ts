import { contactReducer } from "./contact/contact.reducer";
import { RootStore } from "./rootStore.interface";

export const rootReducer = {
  contacts: contactReducer
};
