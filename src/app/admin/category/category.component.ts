import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Category }                from '../../models';
import { CategoryService }         from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router) { }

  getCategories(): void {
    this.categoryService
        .getCategories()
        .then(categories => this.categories = categories);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.create(name)
      .then(category => {
        this.categories.push(category);
        this.selectedCategory = null;
      });
  }

    delete(category: Category): void {
    this.categoryService
        .delete(category.id)
        .then(() => {
          this.categories = this.categories.filter(h => h !== category);
          if (this.selectedCategory === category) { this.selectedCategory = null; }
        });
  }

  
  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail-category', this.selectedCategory.id]);
  }

}
