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
        const route = appRoutes.find(page => {
          const path = `/${page.path}`;
          if (path === event.url) {
            return true;
          }

          if (event.url.includes("/edit")) {
            return true;
          }
        });

        this.pageTitle = route.data.title;
      }
    });
  }
}
