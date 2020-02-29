import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./rootApp/app.component";
import { AppRoutingModule } from "./rootApp/router/router.module";
import { ContactListComponent } from "./views/home/contact-list/contact-list.component";
import { ContactItemComponent } from "./views/home/contact-item/contact-item.component";
import { ErrorComponent } from "./views/error-page/error.component";
import { HomeComponent } from "./views/home/home.component";
import { SearchBarComponent } from "./views/home/search-bar/search-bar.component";
import { TestComponent } from "./views/test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    ErrorComponent,
    HomeComponent,
    SearchBarComponent,
    TestComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
