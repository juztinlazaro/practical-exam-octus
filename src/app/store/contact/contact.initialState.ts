import { Contacts } from "src/app/common/model/contacts.model";

export const initialState = {
  isLoading: false,
  error: null,
  contact: {},
  contacts: []
  // contacts: [
  //   new Contacts(
  //     "juztinlazaro@gmail.com",
  //     "Justin Lazaro",
  //     423423,
  //     "http://www.binarysolutions.jo/Image/avatar_male.png"
  //   ),
  //   new Contacts(
  //     "juztinlazaro1@gmail.com",
  //     "Justin Lazaro",
  //     432423,
  //     "http://www.binarysolutions.jo/Image/avatar_male.png"
  //   ),
  //   new Contacts(
  //     "juztinlazaro2@gmail.com",
  //     "Justin Lazaro",
  //     423423,
  //     "http://www.binarysolutions.jo/Image/avatar_male.png"
  //   )
  // ]
};
