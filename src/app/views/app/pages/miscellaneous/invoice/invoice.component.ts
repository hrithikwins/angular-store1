import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html'
})


export class InvoiceComponent implements OnInit {
  ShopName = '-----';
  AddressLine1 = '---';
  AddressLine2 = '---';
  InvoiceNumber = '----';
  InvoiceDate = '----';
  ItemName = '-----';
  ItemCount = '----';
  ItemUnit = '---';
  ItemAmount = '--';
  Subtotal = '----';
  SubtotalAmount = '--';
  Tax = '--';
  TaxAmount = '---';
  Shipping = '---';
  ShippingCharges = '---';
  Total = '----';
  TotalAmount = '---';
  constructor() { }

  ngOnInit() {
  }

}
