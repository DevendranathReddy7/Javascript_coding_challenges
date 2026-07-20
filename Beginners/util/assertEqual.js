export function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(
      `Assertion failed: expected ${expected}, received ${actual}`,
    );
  }
}
