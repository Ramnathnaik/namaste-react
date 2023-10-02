import sum from "../src/utils/sum";

test("Sum of two numbers", () => {
  //logic to test the sum function
  const result = sum(4, 5);
  //Assertion
  expect(result).toBe(9);
});
