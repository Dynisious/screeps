
/**
 * A type which returns a Peekable iterator.
 */
declare interface Peekable<T> extends Iterable<T> {
  [Symbol.iterator]: () => PeekableIterator<T>;
}

/**
 * An Iterable which is Peekable.
 */
declare interface PeekableIterator<T> extends Iterator<T> {
  /**
   * Peeks at the next result.
   */
  peek: () => IteratorResult<T>;
}
