import { Component, OnInit } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  backButtonOptions: { type: string; onClick: (e: any) => void; };
  deleteButtonOptions: { text: string; type: string; onClick: (e: any) => void; };
  doneButtonOptions: { text: string; type: string; onClick: (e: any) => void; };
  applyButtonOptions: { text: string; type: string; onClick: (e: any) => void; };
  okButtonOptions: { text: string; type: string; onClick: (e: any) => void; };

  constructor() {
    this.okButtonOptions = {
      text: 'OK',
      type: 'normal',
      onClick: function (e) {
        notify('The OK button was clicked');
      }
    };

    this.applyButtonOptions = {
      text: 'Apply',
      type: 'success',
      onClick: function (e) {
        notify('The Apply button was clicked', 'success', 600);
      }
    };

    this.doneButtonOptions = {
      text: 'Done',
      type: 'default',
      onClick: function (e) {
        notify('The Done button was clicked', 'info', 600);
      }
    };

    this.deleteButtonOptions = {
      text: 'Delete',
      type: 'danger',
      onClick: function (e) {
        notify('The Delete button was clicked', 'error', 600);
      }
    };

    this.backButtonOptions = {
      type: 'back',
      onClick: function (e) {
        notify('The Back button was clicked', 'warning', 600);
      }
    };

  }

  ngOnInit() { }

}


