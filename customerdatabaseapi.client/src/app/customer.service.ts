import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  // Create
  createCustomer(newCustomer: Customer) {
  }

  // Read
  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("/api/customers")
  }

  getCustomerById(id: number) {
  }

  // Update
  updateCustomer(id: number, newCustomer: Customer) {
  }

  // Delete
  deleteCustomer(id: Customer) {
  }

}
