import { Square } from "@/square";

describe("square", () => {
  test("should say who am I", () => {
    const square = new Square();
    expect(square.whoAmI()).toBe("I'm a square");
  });
});
