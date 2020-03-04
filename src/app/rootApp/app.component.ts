import { Component, EventEmitter } from "@angular/core";
import { RootStore } from "../store/rootStore.interface";
import { Store } from "@ngrx/store";
import { GetContactList } from "../store/contact/contact.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  pageTitle = new EventEmitter<string>();

  constructor(private store: Store<RootStore>) {}

  ngOnInit() {
    const localContacts = localStorage.getItem("contacts");

    if (localContacts) {
      this.store.dispatch(new GetContactList(JSON.parse(localContacts)));
    }

    this.store.select("contacts").subscribe(state => {
      console.log("state", state);
    });
  }
}
