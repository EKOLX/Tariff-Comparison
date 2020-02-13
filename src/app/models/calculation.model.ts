export class Calculation {
  constructor(public id: CalculationType, public name: string) {}
}

export enum CalculationType {
  Month = 1,
  Year
}
