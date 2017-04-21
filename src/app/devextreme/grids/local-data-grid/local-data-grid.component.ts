import { Component, OnInit } from '@angular/core';
import { Customer, LocalDataGridService } from 'app/devextreme/grids/local-data-grid/local-data-grid.service';

@Component({
  selector: 'app-local-data-grid',
  templateUrl: './local-data-grid.component.html',
  styleUrls: ['./local-data-grid.component.scss']
})
export class LocalDataGridComponent implements OnInit {

  customers: Customer[];

  constructor(service: LocalDataGridService) {
    this.customers = service.getCustomers();
  }

  ngOnInit() {
  }

}
