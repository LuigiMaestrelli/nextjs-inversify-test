import { ShapeCircle } from "@/interfaces/circle";
import { IShape } from "@/interfaces/shapes";
import { ShapeSquare } from "@/interfaces/square";
import { ShapeTriangle } from "@/interfaces/triangle";
import { Shapes } from "@/shapes";

class TriangleMock implements ShapeTriangle {
  whoAmI(): string {
    return "triangle";
  }
}

class SquareMock implements ShapeSquare {
  whoAmI(): string {
    return "square";
  }
}

class CircleMock implements ShapeCircle {
  whoAmI(): string {
    return "circle";
  }
}

const makeSut = (): IShape => {
  return new Shapes(new CircleMock(), new SquareMock(), new TriangleMock());
};

describe("shapes", () => {
  test("should say who am I for circle", () => {
    const sut = makeSut();
    expect(sut.getCircle()).toBe("circle");
  });

  test("should say who am I for triangle", () => {
    const sut = makeSut();
    expect(sut.getTriangle()).toBe("triangle");
  });

  test("should say who am I for square", () => {
    const sut = makeSut();
    expect(sut.getSquare()).toBe("square");
  });
});
