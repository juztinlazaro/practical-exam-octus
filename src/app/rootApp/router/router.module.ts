import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "src/app/views/contact/contact.component";
import { TestComponent } from "src/app/views/test/test.component";
import { ErrorComponent } from "src/app/views/error-page/error.component";
import { ContactEditComponent } from "src/app/views/contact-edit/contact-edit.component";
import { ContactAddComponent } from "src/app/views/contact-add/contact-add.component";

const appRoutes: Routes = [
  {
    path: "contact",
    component: ContactComponent
  },
  { path: "edit", component: ContactEditComponent },
  { path: "add", component: ContactAddComponent },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "not-found",
    component: ErrorComponent,
    data: { message: "Page not found!" }
  },
  {
    path: "**",
    redirectTo: "/not-found"
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true }),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
