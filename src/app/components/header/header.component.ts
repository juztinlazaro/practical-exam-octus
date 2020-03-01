import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { appRoutes } from "../../rootApp/router/router.module";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  pageTitle = "Contact List";

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        const route = appRoutes.find(page => {
          const path = `/${page.path}`;
          return path === event.url;
        });

        this.pageTitle = route.data.title;
      }
    });
  }
}
