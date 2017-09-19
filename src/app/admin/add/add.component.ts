import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdFormFieldControl } from '@angular/material';

import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [DataService]
})

export class AddComponent implements OnInit {

   @Input()
   products: Product[] = [];

   productForm: FormGroup;

   constructor(private dataService: DataService, private fb: FormBuilder) { }
  

  createForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      description: '',
      available: '',
      best_seller: '',
      img: '',
      category: ''
    });
  }

  ngOnInit() {
      this.createForm();
  }

  // onAddProduct(product) {
  //   this.dataService
  //     .addProduct(product)
  //     .subscribe(
  //       (newProduct) => {
  //         this.products = this.products.concat(newProduct);
  //       }
  //     );
  // }

}
