import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  mainFilter: any;

  originalData: any = [];

  constructor(private productsService: ProductsService){  }

  ngOnInit(){

    this.productsService.getData().then(data => {
      this.originalData = data
      this.mainFilter = {
        categories: this.originalData.categories.slice(0),
      }

      // глубокая копия исходных данных
      
      this.products = this.originalData.products.slice(0)

    })
  }

}
