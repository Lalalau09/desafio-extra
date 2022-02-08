import { Product, ProductCollection } from "./models";


class ProductController {
  product: ProductCollection;


  constructor() {
    this.product = new ProductCollection();
  }
  processOptions(option) {
    if (option.search) {
      return this.product.getById(option.search);
    } else {
      return this.product.getAll();
    }
  }
}

export { ProductController };
