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

  // currentSorting: string;

  originalData: any = [];

  constructor(private productsService: ProductsService){  }

  ngOnInit(){

    this.productsService.getData().then(data => {
      this.originalData = data
      this.mainFilter = {
        // search: '',
        categories: this.originalData.categories.slice(0),
      }

      //Make a deep copy of the original data to keep it immutable
      this.products = this.originalData.products.slice(0)
      // this.sortProducts('name')
    })
  }

  // sortProducts(criteria){
  //   //console.log('sorting ' + this.products.length + ' products')
  //   this.products.sort((a,b) => {
  //     let priceComparison = parseFloat(a.price.replace(/\./g, '').replace(',', '.')) - parseFloat(b.price.replace(/\./g, '').replace(',', '.'))
  //     if(criteria == 'priceDes'){
  //       return -priceComparison
  //     }else if(criteria == 'priceAsc'){
  //       return  priceComparison
  //     }else if(criteria == 'name'){
  //       let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  //       if (nameA < nameB)
  //         return -1;
  //       if (nameA > nameB)
  //         return 1;
  //       return 0;
  //     }else{
  //       //Keep the same order in case of any unexpected sort criteria
  //       return -1
  //     }
  //   })
  //   this.currentSorting = criteria
  // }
}
