import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "src/app/views/contact/contact.component";
import { TestComponent } from "src/app/views/test/test.component";
import { ErrorComponent } from "src/app/views/error-page/error.component";
import { ContactEditComponent } from "src/app/views/contact-edit/contact-edit.component";
import { ContactAddComponent } from "src/app/views/contact-add/contact-add.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: ContactComponent,
    data: { title: "Contact List" }
  },
  {
    path: "edit/:email",
    component: ContactEditComponent,
    data: { title: "Edit Contact" }
  },
  {
    path: "add",
    component: ContactAddComponent,
    data: { title: "Add Contact" }
  },
  {
    path: "test",
    component: TestComponent,
    data: { message: "Test" }
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
