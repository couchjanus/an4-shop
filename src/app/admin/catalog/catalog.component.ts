import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [DataService]
})
export class CatalogComponent implements OnInit {

  @Input()
  products: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService
      .getAllProducts()
      .subscribe(
        (products) => {
          this.products = products;
        }
      );
  }

  // get products() {
  //   return this.dataService.getAllProducts();
  // } 

}
