import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  pageTitle = "Contact List";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      console.log("data", data);
      this.pageTitle = data["title"];
    });
  }
}
