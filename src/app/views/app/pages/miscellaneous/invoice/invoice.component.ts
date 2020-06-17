import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timeRequired } from './custom.validators';
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

  formExternalComponents: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formExternalComponents = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z]+$')]),
      ngSelect: new FormControl(null, [Validators.required]),
      basicDate: new FormControl(null, [Validators.required]),
      basicTime: new FormControl(null, [timeRequired()]),
      switch: new FormControl(null, [Validators.requiredTrue])
    });
  }


  onSubmit() {
    console.log(this.formExternalComponents);
  }

}
