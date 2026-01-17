import { sum } from "../sum";

test("this test should give the addition of two numbers", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});
