
module.exports = <T>(iter: Iterable<T>): Peekable<T> => {
  const iterable = iter[Symbol.iterator]();
  let cache: Option<IteratorResult<T>> = null;

  return {
    peek: () => {
      if (cache === null) cache = iterable.next();

      return cache;
    },
    next: () => {
      if (cache === null) return iterable.next();

      const res = cache;

      cache = null;
      return res;
    }
  };
};
