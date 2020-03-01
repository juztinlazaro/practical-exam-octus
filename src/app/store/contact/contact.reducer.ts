import { initialState } from "./contact.initialState";
import * as TYPES from "./contact.types";
import * as ACTIONS from "./contact.actions";

export function contactReducer(
  state = initialState,
  action: ACTIONS.ContactActions
) {
  console.log(action);
  switch (action.type) {
    case TYPES.ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    }

    case TYPES.ADD_CONTACT: {
      return {
        ...state
      };
    }

    case TYPES.ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    }

    case TYPES.ADD_CONTACT_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
