import { ShapeTriangle } from "@/interfaces/triangle";
import { injectable } from "inversify";

@injectable()
export class Triangle implements ShapeTriangle {
  whoAmI(): string {
    return "I'm a triangle";
  }
}
