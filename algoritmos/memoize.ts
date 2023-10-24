type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  const cache: Record<string, any> = {}
  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args)
    if (key in cache) {
      return cache[key]
    }
    const result = fn.apply(this, args)
    cache[key] = result
    return result
  }
}

const memoizedFn = memoize(function (a: number, b: number) {
  return a + b
})

memoizedFn(10, 10)
