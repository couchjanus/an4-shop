import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdFormFieldControl } from '@angular/material';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DataService]
})
export class EditComponent implements OnInit {

  product: Product;
  productForm: FormGroup;

  constructor(private dataService: DataService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location
              ) { }

    
  ngOnInit(): void {
    this.dataService
      .getProductById(1)
      .subscribe(product => this.product = product);
    
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.dataService.getProductById(+params.get('id')))
    //   .subscribe(product => this.product = product);
    
      this.createForm();
  }

  onSaveProduct(): void {
    this.dataService.updateProductById(this.product)
    .subscribe(() => this.goBack());
  }

  createForm() {
    this.productForm = this.fb.group({
      productName: [this.product.name, Validators.required ],
      price: [this.product.price, Validators.required ],
      description: this.product.description,
      available: this.product.available,
      best_seller: this.product.best_seller,
      img: '',
      categories: ''
    });
  }

  goBack(): void {
    this.location.back();
  }

}
