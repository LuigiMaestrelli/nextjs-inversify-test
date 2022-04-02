import { ShapeCircle } from "@/interfaces/circle";
import { injectable } from "inversify";

@injectable()
export class Circle implements ShapeCircle {
  whoAmI(): string {
    return "I'm a circle";
  }
}
