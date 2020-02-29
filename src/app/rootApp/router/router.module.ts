import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/views/home/home.component";
import { TestComponent } from "src/app/views/test/test.component";
import { ErrorComponent } from "src/app/views/error-page/error.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
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
