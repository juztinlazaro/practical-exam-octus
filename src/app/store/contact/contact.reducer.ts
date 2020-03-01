import { initialState } from "./contact.initialState";
import * as TYPES from "./contact.types";
import * as ACTIONS from "./contact.actions";

export function contactReducer(
  state = initialState,
  action: ACTIONS.AddContact
) {
  switch (action.type) {
    case TYPES.ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    }
    default:
      return state;
  }
}
