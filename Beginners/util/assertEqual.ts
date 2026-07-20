export function assertEqual<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(
      `Assertion failed: expected ${expected}, received ${actual}`,
    );
  }
}
