import { EventEmitter } from "@angular/core";

export class PageTitleService {
  pageTitle: string;

  public onRedirectRoute = new EventEmitter<string>();

  getPageTitle() {
    return this.pageTitle;
  }
}
