import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customerList: Customer[] = []; 

  constructor(public customer: CustomerService) { }

  ngOnInit() {
    this.customer.getAllCustomers().subscribe((data: Customer[]) => {
      this.customerList = data;
    })
  }

  title = 'customerdatabaseapi.client';
}
