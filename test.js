import { describe, it, expect } from "vitest";
import { thirdAngle } from "./app.js";

describe("thirdAngle function tests", () => {
  it("Dado 2 ángulos: 30, 60 -> se espera 90", () => {
    expect(thirdAngle(30, 60)).toBe(90);
  });

  it("Dado 2 ángulos: 60, 60 -> se espera 60", () => {
    expect(thirdAngle(60, 60)).toBe(60);
  });

  it("Dado 2 ángulos: 43, 78 -> se espera 59", () => {
    expect(thirdAngle(43, 78)).toBe(59);
  });

  it("Dado 2 ángulos: 10, 20 -> se espera 150", () => {
    expect(thirdAngle(10, 20)).toBe(150);
  });
});
