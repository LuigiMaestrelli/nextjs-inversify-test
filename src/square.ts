import { ShapeSquare } from "@/interfaces/square";
import { injectable } from "inversify";

@injectable()
export class Square implements ShapeSquare {
  whoAmI(): string {
    return "I'm a square";
  }
}
