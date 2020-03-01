import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-contact-item",
  templateUrl: "./contact-item.component.html"
})
export class ContactItemComponent {
  @Output() deleteClickEvent: EventEmitter<{ id: number }> = new EventEmitter();

  public handleDeleteEvent() {
    this.deleteClickEvent.emit({ id: 12 });
  }
}
