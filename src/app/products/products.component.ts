import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ProductViewModel } from "../viewModels/productView.model";
import { ProductService } from "../services/product.service";
import { calculateAnnualCosts } from "../lib/logic";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnChanges {
  @Input() consumption: number;

  productCollection: Array<ProductViewModel> = [];

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productCollection = [];

    if (this.consumption) {
      this.productService.getProducts().subscribe(
        products => {
          for (let product of products) {
            const annualCosts = calculateAnnualCosts(this.consumption, product);
            const productModel = new ProductViewModel(
              product.name,
              annualCosts
            );

            this.productCollection.push(productModel);
          }

          this.productCollection.sort((a, b) =>
            a.annualCosts > b.annualCosts ? 1 : -1
          );
        },
        error => console.log(error)
      );
    }
  }
}
