import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./rootApp/app.component";
import { HomeComponent } from "./views/home/home.component";
import { TestComponent } from "./views/test/test.component";
import { ErrorComponent } from "./views/error-page/error.component";
import { AppRoutingModule } from "./rootApp/router/router.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, TestComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
