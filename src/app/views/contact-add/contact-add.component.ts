import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription, Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { v4 as uuidv4 } from "uuid";

import { RootStore } from "src/app/store/rootStore.interface";
import { AddContact } from "src/app/store/contact/contact.actions";
import { Contacts } from "src/app/common/model/contacts.model";

@Component({
  selector: "app-contact-add",
  templateUrl: "./contact-add.component.html"
})
export class ContactAddComponent implements OnInit, OnDestroy {
  isLoading = false;
  storeSubscription: Subscription;
  contactForm: FormGroup;
  contacts = [];

  constructor(private store: Store<RootStore>) {}

  ngOnInit() {
    this.storeSubscription = this.store.select("contacts").subscribe(state => {
      this.isLoading = state.isLoading;
      this.contacts = state.contacts;
    });

    this.contactForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        this.duplicatedName.bind(this)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        this.duplicatedEmail.bind(this)
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
        this.duplicatedPhone.bind(this)
      ])
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  onSubmit() {
    const { name, email, phone } = this.contactForm.value;
    const payload: Contacts = {
      id: uuidv4(),
      name,
      email,
      phone,
      image: "http://www.binarysolutions.jo/Image/avatar_male.png"
    };

    this.store.dispatch(new AddContact(payload));
  }

  duplicatedName(control: FormControl) {
    const countRecord = this.contacts.filter(
      item => item.name === control.value
    ).length;

    if (countRecord > 1) {
      return { nameInvalid: true };
    }

    return null;
  }

  duplicatedEmail(control: FormControl) {
    const validate = this.contacts.find(item => item.email === control.value);

    if (validate) {
      return { emailValid: true };
    }

    return null;
  }

  duplicatedPhone(control: FormControl) {
    const validate = this.contacts.find(item => item.phone === control.value);

    if (validate) {
      return { phoneValid: true };
    }

    return null;
  }
}
