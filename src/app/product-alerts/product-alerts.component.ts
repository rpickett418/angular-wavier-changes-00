import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// @Component is a decorator that indicates the following class is a component. //
// @Component also provides metadata about the component including selectors, templates, and styles.//
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter(); //define 'notify' w/ a @Output decorator  and an instance of EventEmitter // We need this in order for the notify me button to work // 

  constructor() {}

  ngOnInit(): void {}
}
