import { Component, EventEmitter } from "@angular/core";
import { RootStore } from "../store/rootStore.interface";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-starter-kit";
  pageTitle = new EventEmitter<string>();

  constructor(private store: Store<RootStore>) {}

  ngOnInit() {
    this.store.select("contacts").subscribe(state => {
      console.log("state", state);
    });
  }
}
