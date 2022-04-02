import { Triangle } from "@/triangle";

describe("triangle", () => {
  test("should say who am I", () => {
    const triangle = new Triangle();
    expect(triangle.whoAmI()).toBe("I'm a triangle");
  });
});
