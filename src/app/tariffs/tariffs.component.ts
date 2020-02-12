import { Component, OnInit } from "@angular/core";
import { TariffViewModel } from "../viewModels/tariffView.model";

@Component({
  selector: "app-tariffs",
  templateUrl: "./tariffs.component.html",
  styleUrls: ["./tariffs.component.scss"]
})
export class TariffsComponent implements OnInit {
  tariffCollection: Array<TariffViewModel> = [];

  constructor() {}

  ngOnInit() {}
}
