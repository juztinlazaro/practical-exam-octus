import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./rootApp/app.component";
import { AppRoutingModule } from "./rootApp/router/router.module";
import { ContactListComponent } from "./views/contact/contact-list/contact-list.component";
import { ContactItemComponent } from "./views/contact/contact-item/contact-item.component";
import { ErrorComponent } from "./views/error-page/error.component";
import { ContactComponent } from "./views/contact/contact.component";
import { SearchBarComponent } from "./views/contact/search-bar/search-bar.component";
import { TestComponent } from "./views/test/test.component";
import { ContactEditComponent } from "./views/contact-edit/contact-edit.component";
import { ContactAddComponent } from "./views/contact-add/contact-add.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContactDeleteComponent } from "./views/contact/contact-delete/contact-delete.component";
import { PageTitleService } from "./common/service/pageTitle.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactEditComponent,
    ContactAddComponent,
    ContactDeleteComponent,
    ErrorComponent,
    HeaderComponent,
    ContactComponent,
    SearchBarComponent,
    TestComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PageTitleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
