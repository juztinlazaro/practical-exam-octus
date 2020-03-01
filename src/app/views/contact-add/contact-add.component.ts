import { Component } from "@angular/core";
import { AddContact } from "src/app/store/contact/contact.actions";
import { Contacts } from "src/app/common/model/contacts.model";
import { Store } from "@ngrx/store";
import { RootStore } from "src/app/store/rootStore.interface";

@Component({
  selector: "app-contact-add",
  templateUrl: "./contact-add.component.html"
})
export class ContactAddComponent {
  name: string = "";
  email: string = "";
  phone: string = "";

  constructor(private store: Store<RootStore>) {}

  onAddContact() {
    const payload: Contacts = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      image: null
    };

    console.log("payload", payload);
    this.store.dispatch(new AddContact(payload));
  }
}
