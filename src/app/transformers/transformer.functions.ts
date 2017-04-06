export function simpleAdd(a, b) {
  return {
    path: `${a.path} + ${b.path}`,
    value: a.value + b.value
  };
}
