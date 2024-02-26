import { Component, Input } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  @Input() customer: Customer = {
      id: 0,
      firstName: '',
      lastName: '',
      primaryEmail: '',
      secondaryEmail: '',
      phoneContactID: 0,
      addressID: 0
  }
}
