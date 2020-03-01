import { Component } from "@angular/core";
import { Contacts } from "src/app/common/model/contacts.model";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions
} from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "src/app/components/modal/modal.component";
@Component({
  selector: "app-home",
  templateUrl: "./contact.component.html"
})
export class ContactComponent {
  modalOptions: NgbModalOptions;
  closeResult: string;
  contacts: Contacts[] = [
    new Contacts(
      "juztinlazaro@gmail.com",
      "Justin Lazaro",
      12314,
      "https://lh3.googleusercontent.com/proxy/B86oAEP_bE-j_NVGUcgIzs6Db6K52p93BGuH_gL9LpCu7uRghEO6GykK6EGYDTlj-GtESWGq45sUwsakTB1Qa5kpeBcs17tEPGFu"
    ),
    new Contacts(
      "juztinlazaro1@gmail.com",
      "Justin Lazaro",
      12314,
      "https://lh3.googleusercontent.com/proxy/B86oAEP_bE-j_NVGUcgIzs6Db6K52p93BGuH_gL9LpCu7uRghEO6GykK6EGYDTlj-GtESWGq45sUwsakTB1Qa5kpeBcs17tEPGFu"
    ),
    new Contacts(
      "juztinlazaro2@gmail.com",
      "Justin Lazaro",
      12314,
      "https://lh3.googleusercontent.com/proxy/B86oAEP_bE-j_NVGUcgIzs6Db6K52p93BGuH_gL9LpCu7uRghEO6GykK6EGYDTlj-GtESWGq45sUwsakTB1Qa5kpeBcs17tEPGFu"
    )
  ];

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: "static",
      backdropClass: "customBackdrop"
    };
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
