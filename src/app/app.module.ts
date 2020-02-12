import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TariffsComponent } from "./tariffs/tariffs.component";
import { ComparisonComponent } from './comparison/comparison.component';

@NgModule({
  declarations: [AppComponent, TariffsComponent, ComparisonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
