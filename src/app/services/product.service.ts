import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { Product } from "../models/product.model";
import { Calculation } from "../models/calculation.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  serverApi = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.serverApi}/products`,
      this.httpOptions
    );
  }

  getCalculation(): Observable<Calculation[]> {
    return this.http.get<Calculation[]>(
      `${this.serverApi}/calculation`,
      this.httpOptions
    );
  }

  getProductsAndCalculation(): Observable<[Product[], Calculation[]]> {
    const products = this.getProducts();
    const calculation = this.getCalculation();

    return forkJoin(products, calculation);
  }
}
