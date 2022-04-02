import { Circle } from "@/circle";

describe("circle", () => {
  test("should say who am I", () => {
    const circle = new Circle();
    expect(circle.whoAmI()).toBe("I'm a circle");
  });
});
