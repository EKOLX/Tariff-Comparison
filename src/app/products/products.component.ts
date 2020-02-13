import { Component, OnInit } from "@angular/core";
import { ProductViewModel } from "../viewModels/productView.model";
import { ProductService } from "../services/product.service";
import { calculateAnnualCosts } from "../lib/logic";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  consumption: number = 4500; // TODO: test
  productCollection: Array<ProductViewModel> = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe(
      products => {
        for (let product of products) {
          const annualCosts = calculateAnnualCosts(this.consumption, product);
          const productModel = new ProductViewModel(product.name, annualCosts);

          this.productCollection.push(productModel);
        }
      },
      error => console.log(error)
    );
  }
}
