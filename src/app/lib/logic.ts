import { Product } from "../models/product.model";
import { CalculationType } from "../models/calculation.model";

export const calculateAnnualCosts = (consumption: number, product: Product) => {
  if (consumption === undefined || consumption == null || consumption <= 0)
    return null;

  const year = 12; // months
  const consumptionLimit = 4000; // kWh/year

  if (product.calculationId == CalculationType.Month) {
    return product.baseCost * year + product.consumptionCost * consumption;
  } else if (product.calculationId == CalculationType.Year) {
    return consumption < consumptionLimit
      ? product.baseCost
      : product.baseCost +
          product.consumptionCost * (consumption - consumptionLimit);
  }

  return null;
};
