import { Component } from "@angular/core";

@Component({
  selector: "app-contact-add",
  templateUrl: "./contact-add.component.html"
})
export class ContactAddComponent {
  name: string = "";
  email: string = "";
  phone: string = "";

  onAddContact() {
    const payload = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    console.log("payload", payload);
  }
}
