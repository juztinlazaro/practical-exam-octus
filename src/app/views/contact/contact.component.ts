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
@Component({
  selector: "app-home",
  templateUrl: "./contact.component.html"
})
export class ContactComponent implements OnInit {
  modalOptions: NgbModalOptions;
  closeResult: string;
  contacts: Observable<Contacts[]>;

  constructor(private modalService: NgbModal, private store: Store<RootStore>) {
    this.modalOptions = {
      backdrop: "static",
      backdropClass: "customBackdrop"
    };
  }

  ngOnInit() {
    this.contacts = this.store.select("contacts");
  }

  handleDeleteEvent(event) {
    const modalRef = this.modalService.open(ModalComponent, this.modalOptions);
    modalRef.componentInstance.title = "Confirmation";
    modalRef.componentInstance.content = "Are you sure you want to delete?";
    modalRef.componentInstance.okCallBack.subscribe(() => {
      console.log("yayooo");
      // modalRef.componentInstance.close();
    });
  }
}
