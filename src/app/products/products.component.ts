import { Component, OnInit } from "@angular/core";
import { ProductViewModel } from "../viewModels/productView.model";
import { ProductService } from "../services/product.service";
import { calculateCosts } from "../lib/logic";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  productCollection: Array<ProductViewModel> = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProductsAndCalculation().subscribe(
      result => {
        for (let product of result[0]) {
          const calculation = result[1].find(
            c => c.id === product.calculationId
          );
          const annualCosts = calculateCosts(product, calculation);
          const productModel = new ProductViewModel(product.name, annualCosts);

          this.productCollection.push(productModel);
        }
      },
      error => console.log(error)
    );
  }
}
