import { initialState } from "./contact.initialState";
import * as TYPES from "./contact.types";
import * as ACTIONS from "./contact.actions";

export function contactReducer(
  state = initialState,
  action: ACTIONS.ContactActions
) {
  console.log(action);
  console.log("type", action);
  switch (action.type) {
    case TYPES.ADD_CONTACT: {
      return {
        ...state,
        isLoading: true,
        contacts: [...state.contacts, action.payload]
      };
    }

    case TYPES.ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, action.payload]
      };
    }

    case TYPES.ADD_CONTACT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case TYPES.DELETE_CONTACT: {
      const removeContact = state.contacts.filter(contact => {
        return contact.email !== action.payload.email;
      });

      return {
        ...state,
        isLoading: true,
        contacts: removeContact
      };
    }

    case TYPES.DELETE_CONTACT_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }

    case TYPES.DELETE_CONTACT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
