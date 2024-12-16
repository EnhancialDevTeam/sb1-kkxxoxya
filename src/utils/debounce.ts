export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
) {
  let timeout: NodeJS.Timeout;

  const debouncedFunc = function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };

  debouncedFunc.cancel = function () {
    clearTimeout(timeout);
  };

  return debouncedFunc;
}