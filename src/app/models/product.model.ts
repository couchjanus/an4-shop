export class Product{
  id: number;
  name: string;
  price: number;
  available: boolean;
  best_seller: boolean;
  categories: number[];
  img: string;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public updateFrom(src: Product): void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
    this.img = src.img;
  }
}
