import { Product } from "../models/product.model";
import { CalculationType } from "../models/calculation.model";
import { calculateAnnualCosts } from "./logic";

describe("Business logic", () => {
  it("should calculate annual costs precisely", () => {
    const productA = new Product("Product A", 5, 0.22, CalculationType.Month);
    const productB = new Product("Product B", 800, 0.3, CalculationType.Year);

    let consumption = 0;
    let resultA = calculateAnnualCosts(consumption, productA);
    let resultB = calculateAnnualCosts(consumption, productB);

    expect(resultA).toEqual(null);
    expect(resultB).toEqual(null);

    consumption = -100;
    resultA = calculateAnnualCosts(consumption, productA);
    resultB = calculateAnnualCosts(consumption, productB);

    expect(resultA).toEqual(null);
    expect(resultB).toEqual(null);

    consumption = 3500;
    resultA = calculateAnnualCosts(consumption, productA);
    resultB = calculateAnnualCosts(consumption, productB);

    expect(resultA).toEqual(830);
    expect(resultB).toEqual(800);

    consumption = 4500;
    resultA = calculateAnnualCosts(consumption, productA);
    resultB = calculateAnnualCosts(consumption, productB);

    expect(resultA).toEqual(1050);
    expect(resultB).toEqual(950);

    consumption = 6000;
    resultA = calculateAnnualCosts(consumption, productA);
    resultB = calculateAnnualCosts(consumption, productB);

    expect(resultA).toEqual(1380);
    expect(resultB).toEqual(1400);
  });
});
