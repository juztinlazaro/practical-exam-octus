import { Component, Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Contacts } from "src/app/common/model/contacts.model";

@Component({
  selector: "app-contact-item",
  templateUrl: "./contact-item.component.html"
})
export class ContactItemComponent {
  @Input() contact: Contacts;
  @Output() deleteClickEvent = new EventEmitter();
  @Output() editClickEvent = new EventEmitter();

  public handleDeleteEvent() {
    this.deleteClickEvent.emit();
  }

  public handleGetEditContact() {
    this.editClickEvent.emit();
  }
}
