import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./rootApp/app.component";
import { AppRoutingModule } from "./rootApp/router/router.module";
import { ContactItemComponent } from "./views/contact/contact-item/contact-item.component";
import { ErrorComponent } from "./views/error-page/error.component";
import { ContactComponent } from "./views/contact/contact.component";
import { SearchBarComponent } from "./views/contact/search-bar/search-bar.component";
import { TestComponent } from "./views/test/test.component";
import { ContactEditComponent } from "./views/contact-edit/contact-edit.component";
import { ContactAddComponent } from "./views/contact-add/contact-add.component";
import { ContactDeleteComponent } from "./views/contact/contact-delete/contact-delete.component";
import { HeaderComponent } from "./components/header/header.component";
import { ModalComponent } from "./components/modal/modal.component";

import { PageTitleService } from "./common/service/pageTitle.service";
import { rootReducer } from "./store/rootReducer";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { ContactEffects } from "./store/contact/contact.effects";
import { ContactService } from "./common/service/contact.service";
import { SpinnerComponent } from "./components/spinner/spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    ContactEditComponent,
    ContactAddComponent,
    ContactDeleteComponent,
    ContactComponent,
    ErrorComponent,
    HeaderComponent,
    ModalComponent,
    SearchBarComponent,
    SpinnerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([ContactEffects])
  ],
  entryComponents: [ModalComponent],
  providers: [PageTitleService, NgbActiveModal, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
