import { CartItem } from "./";

export class ShoppingCart {
  public items: CartItem[] = new Array<CartItem>();
  public deliveryOptionId: number;
  public total: number = 0;
  public deliveryTotal: number = 0;
  public itemsTotal: number = 0;

  public updateFrom(src: ShoppingCart) {
    this.items = src.items;
    this.deliveryOptionId = src.deliveryOptionId;
    this.total = src.total;
    this.deliveryTotal = src.deliveryTotal;
    this.itemsTotal = src.itemsTotal;
  }
}
