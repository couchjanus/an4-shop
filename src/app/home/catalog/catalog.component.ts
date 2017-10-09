import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Product, ShoppingCart } from "../../models";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LocalStorageServie, StorageService } from "../../services";
import { ProductsDataService } from '../../services/products-data.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { DeliveryOptionsDataService } from "../../services/delivery-options.service";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [
    ProductsDataService,
    LocalStorageServie,
    DeliveryOptionsDataService,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]  
})
export class CatalogComponent implements OnInit {
  private routeSub;
  public products: Observable<Product[]>;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService,
                     private route: ActivatedRoute,
                     private router: Router,
                     ) {
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.productId === product.id));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }

  public ngOnInit(): void {
    this.products = this.productsService.all();
  }

}
