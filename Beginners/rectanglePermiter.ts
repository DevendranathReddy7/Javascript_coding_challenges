import { assertEqual } from "./util/assertEqual.js";

function rectanglePerimeter(length: number, width: number): number {
  return 2 * (length + width);
}

console.log(rectanglePerimeter(2, 4));

// These "asserts" are used for self-checking
assertEqual(rectanglePerimeter(2, 4), 12);
assertEqual(rectanglePerimeter(3, 5), 16);
assertEqual(rectanglePerimeter(10, 20), 60);
