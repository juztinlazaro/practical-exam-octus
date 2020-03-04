import { Component, OnInit, OnDestroy } from "@angular/core";
import { AddContact } from "src/app/store/contact/contact.actions";
import { Contacts } from "src/app/common/model/contacts.model";
import { Store } from "@ngrx/store";
import { RootStore } from "src/app/store/rootStore.interface";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contact-add",
  templateUrl: "./contact-add.component.html"
})
export class ContactAddComponent implements OnInit, OnDestroy {
  name: string = "";
  email: string = "";
  phone: number = null;
  isLoading = false;
  storeSubscription: Subscription;

  constructor(private store: Store<RootStore>) {}

  ngOnInit() {
    this.storeSubscription = this.store.select("contacts").subscribe(state => {
      this.isLoading = state.isLoading;
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  onAddContact() {
    const payload: Contacts = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      image: "http://www.binarysolutions.jo/Image/avatar_male.png"
    };

    this.store.dispatch(new AddContact(payload));
  }
}
