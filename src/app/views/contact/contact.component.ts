import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions
} from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { RootStore } from "src/app/store/rootStore.interface";
import { Contacts } from "src/app/common/model/contacts.model";
import { Observable } from "rxjs";
import { DeleteContact } from "src/app/store/contact/contact.actions";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./contact.component.html"
})
export class ContactComponent implements OnInit {
  modalOptions: NgbModalOptions;
  closeResult: string;
  contacts = [];
  searchKey = null;

  constructor(
    private modalService: NgbModal,
    private store: Store<RootStore>,
    private router: Router
  ) {
    this.modalOptions = {
      backdrop: "static",
      backdropClass: "customBackdrop"
    };
  }

  ngOnInit() {
    this.store.select("contacts").subscribe(state => {
      this.contacts = state.contacts;
    });
  }

  handleDeleteEvent(contact: Contacts) {
    const modalRef = this.modalService.open(ModalComponent, this.modalOptions);
    modalRef.componentInstance.title = "Confirmation";
    modalRef.componentInstance.content = `Are you sure you want to delete the contact: ${contact.email}?`;

    modalRef.componentInstance.okCallBack.subscribe(() => {
      this.store.dispatch(new DeleteContact({ id: contact.id }));
      modalRef.componentInstance.close();
    });
  }

  handleGetEditContact(contact: Contacts) {
    this.router.navigate([`/edit/${contact.id}`]);
  }

  handleSearchContacts(key: string) {
    this.searchKey = key;
  }
}
