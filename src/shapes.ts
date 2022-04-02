import { inject, injectable } from "inversify";
import { Circle } from "./circle";
import { IShape } from "./interfaces/shapes";
import { Square } from "./square";
import { Triangle } from "./triangle";
import { TYPES } from "./types";

@injectable()
export class Shapes implements IShape {
  public constructor(
    @inject(TYPES.Circle) private readonly circle: Circle,
    @inject(TYPES.Square) private readonly square: Square,
    @inject(TYPES.Triangle) private readonly triangle: Triangle
  ) {
    console.log("Ctr");
  }

  public getCircle(): string {
    return this.circle.whoAmI();
  }

  public getSquare(): string {
    return this.square.whoAmI();
  }

  public getTriangle(): string {
    return this.triangle.whoAmI();
  }
}
