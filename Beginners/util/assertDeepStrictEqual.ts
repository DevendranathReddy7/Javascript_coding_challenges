function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function deepStrictEqual(actual: unknown, expected: unknown): boolean {
  if (Object.is(actual, expected)) {
    return true;
  }

  if (!isPlainObject(actual) || !isPlainObject(expected)) {
    return false;
  }

  if (Array.isArray(actual) !== Array.isArray(expected)) {
    return false;
  }

  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) {
    return false;
  }

  for (const key of actualKeys) {
    if (!Object.prototype.hasOwnProperty.call(expected, key)) {
      return false;
    }

    if (!deepStrictEqual(actual[key], expected[key])) {
      return false;
    }
  }

  return true;
}

export function assertDeepStrictEqual<T>(actual: T, expected: T): void {
  if (!deepStrictEqual(actual, expected)) {
    throw new Error(
      `Assertion failed: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`,
    );
  }
}
