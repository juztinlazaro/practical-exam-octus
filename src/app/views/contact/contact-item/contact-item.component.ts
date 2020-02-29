import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contact-item",
  templateUrl: "./contact-item.component.html"
})
export class ContactItemComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onRedirectEdit() {
    this.router.navigate(["edit"]);
  }
}
