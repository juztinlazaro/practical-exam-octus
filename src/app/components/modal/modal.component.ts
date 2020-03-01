import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html"
})
export class ModalComponent {
  @Input() title;
  @Input() content;
  @Output() okCallBack = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {}
  onOkayCallBack() {
    this.okCallBack.emit("ok");
  }

  close() {
    this.activeModal.close();
  }
}
