import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdFormFieldControl } from '@angular/material';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

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
   product: Product;
   location: Location;

   productForm: FormGroup;

   constructor(private dataService: DataService, private fb: FormBuilder, private router : Router) { }
  

  createForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      description: '',
      available: '',
      best_seller: '',
      img: '',
      categories: ''
    });
  }

  ngOnInit() {
      this.createForm();

  }

  onAddProduct(product) {

    this.product = new Product;
    this.product.description = product.description;
    this.product.name = product.name;
    this.product.price = product.price;
    this.product.available = product.available;
    this.product.best_seller = product.available;
    this.product.img = "http://lorempixel.com/200/100/cats/12";
    this.product.categories = [1,2];

    this.dataService
      .addProduct(this.product)
      .subscribe(
        () => this.router.navigate(['admin/list'])//this.goBack()
      );
  }

  

  goBack(): void {
    this.location.back();
  }

}
