import { Component, OnInit, OnDestroy } from "@angular/core";
import { RootStore } from "src/app/store/rootStore.interface";
import { Store } from "@ngrx/store";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Contacts } from "src/app/common/model/contacts.model";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { GetContact } from "src/app/store/contact/contact.actions";

@Component({
  selector: "app-contact-edit",
  templateUrl: "./contact-edit.component.html"
})
export class ContactEditComponent implements OnInit, OnDestroy {
  storeSubscription: Subscription;
  routeSubscription: Subscription;

  contact = null;
  isLoading = false;
  contactForm: FormGroup;
  email = null;

  constructor(private store: Store<RootStore>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.store.dispatch(new GetContact({ email: params.email }))
    );

    this.storeSubscription = this.store.select("contacts").subscribe(state => {
      this.isLoading = state.isLoading;
      this.contact = state.contact;
    });

    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, Validators.required),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl(this.contact.phone, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  onSubmit() {
    const { name, email, phone } = this.contactForm.value;
    const payload: Contacts = {
      name,
      email,
      phone,
      image: "http://www.binarysolutions.jo/Image/avatar_male.png"
    };

    // this.store.dispatch(new AddContact(payload));
  }
}
