
declare type Selector<T> = (head: T, rest: ConsList<T>) => T | ConsList<T>;
declare type Cons<T> = (selector: Selector<T>) => T | ConsList<T>;
declare type ConsList<T> = Maybe<Cons<T>>;

declare interface ConsExport {
  /**
   * Creates a new Cons value.
   */
  cons: <T>(head: T, rest: ConsList<T>) => Cons<T>;
  /**
   * Returns the head of the cons.
   */
  head: <T>(cons: Cons<T>) => T;
  /**
   * Returns the rest of the cons.
   */
  rest: <T>(cons: ConsList<T>) => ConsList<T>;
  /**
   * Creates a Cons of a single value.
   */
  one: <T>(value: T) => Cons<T>;
  /**
   * Converts an T[] into a ConsList.
   */
  from_list: <T>(arr: T[]) => ConsList<T>;
  /**
   * Creates an iterator over a ConsList.
   */
  iterate: <T>(cons: ConsList<T>) => PeekableIterator<T>;
  /**
   * Concatenates the two ConsLists.
   */
  concat: <T>(left: ConsList<T>, right: ConsList<T>) => ConsList<T>;
  /**
   * Pushes the T[] onto the ConsList.
   */
  append: <T>(left: T[], right: ConsList<T>) => ConsList<T>;
  /**
   * Maps the values of the ConsList.
   */
  map: <T, U>(cons: ConsList<T>, map: (t: T) => U) => ConsList<U>;
}

/**
 * A possibly absent value.
 */
declare type Maybe<T> = T | null;

declare interface MaybeExport {
  /**
   * Converts an optional parameter into a Maybe.
   */
  optional: <T>(maybe?: T) => Maybe<T>;
  /**
   * Produces a Maybe based on `cond`.
   */
  cond: <T>(cond: boolean, value: T) => Maybe<T>;
  /**
   * Produces a Maybe based on `cond`.
   */
  cond_then: <T>(cond: boolean, value: () => T) => Maybe<T>;
  /**
   * Returns the inner value or the replacement value.
   */
  maybe: <T>(maybe: Maybe<T>, a: T) => T;
  /**
   * Returns the inner value or the replacement value.
   */
  maybe_then: <T, U>(maybe: Maybe<T>, a: () => T) => T;
  /**
   * Maps the inner value.
   */
  map: <T, U>(maybe: Maybe<T>, map: (t: T) => U) => Maybe<U>;
  /**
   * Returns the mapped inner value or the replacement value.
   */
  map_or: <T, U>(maybe: Maybe<T>, map: (t: T) => U, or: U) => U;
  /**
   * Returns the mapped inner value or the result of `or` value.
   */
  map_or_else: <T, U>(maybe: Maybe<T>, map: (t: T) => U, or: () => U) => U;
  /**
   * Returns `a` if it has a value, else `b`.
   */
  or: <T>(a: Maybe<T>, b: Maybe<T>) => Maybe<T>;
  /**
   * Returns `a` if it has a value, else the result of `b`.
   */
  or_else: <T>(a: Maybe<T>, b: () => Maybe<T>) => Maybe<T>;
  /**
   * Returns `b` if `a` has a value, else `null`.
   */
  and: <T, U>(a: Maybe<T>, b: Maybe<U>) => Maybe<U>;
  /**
   * Returns the result of `b` if `a` has a value, else `null`.
   */
  and_then: <T, U>(a: Maybe<T>, b: (t: T) => Maybe<U>) => Maybe<U>;
}

declare interface IteratorsExport {
  /**
   * Converts the passed `Iterator` into a `PeekableIterator`.
   */
  peek: <T>(iter: Iterator<T>) => PeekableIterator<T>;
  /**
   * Maps the passed `Iterator`.
   */
  map: <T, U>(iter: Iterator<T>, map: (t: T) => U) => Iterator<U>;
  /**
   * Filters the passed `Iterator`.
   */
  filter: <T>(iter: Iterator<T>, filter: (t: T) => boolean) => Iterator<T>;
  /**
   * Filters the passed `Iterator`.
   */
  filter_map: <T, U>(iter: Iterator<T>, filter: (t: T) => Maybe<U>) => Iterator<U>;
}
  