import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CartItem } from "../../models/cart-item.model";
import { DeliveryOption } from "../../models/delivery-option.model";
import { Product } from "../../models/product.model";
import { ShoppingCart } from "../../models/cart.model";
import { DeliveryOptionsDataService } from "../../services/delivery-options.service";
import { ProductsDataService } from "../../services/products-data.service";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit, OnDestroy {
  private routeSub;
  public deliveryOptions: Observable<DeliveryOption[]>;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;

  private products: Product[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsDataService,
                     private deliveryOptionService: DeliveryOptionsDataService,
                     private shoppingCartService: ShoppingCartService,
                     private route: ActivatedRoute,
                     private router: Router,
                     ) {
    this.routeSub = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((routeChange) => {
      // const slug = this.route.snapshot.params['slug'];
      
    })
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public setDeliveryOption(option: DeliveryOption): void {
    this.shoppingCartService.setDeliveryOption(option);
  }

  public ngOnInit(): void {
    this.deliveryOptions = this.deliveryOptionService.all();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
                           .map((item) => {
                              const product = this.products.find((p) => p.id === item.productId);
                              return {
                                ...item,
                                product,
                                totalCost: product.price * item.quantity };
                           });
      });
    });
  }

  public ngOnDestroy(): void {
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
    

    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
