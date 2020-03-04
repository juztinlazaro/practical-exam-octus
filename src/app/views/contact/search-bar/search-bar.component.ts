import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search-bar.component.html"
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  handleSearchContact(event) {
    this.searchEvent.emit(event.target.value);
  }
}
