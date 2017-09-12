import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
