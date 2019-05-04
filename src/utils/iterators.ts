
(() => {
const peek = <T>(iter: Iterator<T>): PeekableIterator<T> => {
  let cache: Maybe<IteratorResult<T>> = null;
  const next = iter.next;

  iter.next = () => {
    if (cache === null) return next();

    const res = cache;
    cache = null;
    return res;
  };
  (<PeekableIterator<T>>iter).peek = () => {
    if (cache === null) cache = next();

    return cache;
  };
  
  return <PeekableIterator<T>>iter;
};
const map = <T, U>(iter: Iterator<T>, map: (t: T) => U): Iterator<U> => {
  const next = iter.next;

  (<any>iter).next = () => {
    const res = next();

    if (res.value !== undefined) (<any>res).value = map(res.value);

    return res;
  };

  return <Iterator<U>><any>iter;
};
const filter = <T>(iter: Iterator<T>, filter: (t: T) => boolean): Iterator<T> => {
  const next = iter.next;
  const filter_next = (): IteratorResult<T> => {
    const res = next();

    if (res.value !== undefined && !filter(res.value)) return filter_next();

    return res;
  };

  iter.next = filter_next;

  return iter;
};
const filter_map = <T, U>(iter: Iterator<T>, filter: (t: T) => Maybe<U>): Iterator<U> => {
  const next = iter.next;
  const filter_next = (): IteratorResult<U> => {
    const res = next();

    if (res.value !== undefined) {
      const mapped = filter(res.value);

      if (mapped !== null) (<any>res).value = mapped;
      else return filter_next();
    }

    return <any>res;
  };

  (<any>iter).next = filter_next;

  return <Iterator<U>><any>iter;
};

module.exports = <IteratorsExport>{ peek, map, filter, filter_map, };
})();
