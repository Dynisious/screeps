
/**
 * A value which is either `ok` or an `error`.
 */
type Result<T, E> = {
  /**
   * Returns `true` if the value is an `ok`.
   */
  is_ok: () => boolean,
  /**
   * Returns `true` if the value is an `error`.
   */
  is_err: () => boolean,
  /**
   * Sets the value of this result to an `ok`.
   */
  set_ok: (_: T) => void,
  /**
   * Sets the value of this result to an `error`.
   */
  set_err: (_: E) => void,
  /**
   * Returns the `ok` value or throws an error.
   */
  expect: (_: string) => T | undefined,
  /**
   * Returns the `error` value or throws an error.
   */
  expect_err: (_: string) => E | undefined,
  /**
   * Returns the `ok` value or throws an error.
   */
  unwrap: () => T | undefined,
  /**
   * Returns the `error` value or throws an error.
   */
  unwrap_err: () => E | undefined,
  /**
   * Returns either the `ok` value or the passed default value.
   */
  unwrap_or: (_: T) => T,
  /**
   * Returns the `error` if there is one else `other`.
   */
  and: <U>(other: Result<U, E>) => Result<U, E>,
  /**
   * Returns the `ok` if there is one else `other`.
   */
  or: <U>(_: Result<T, U>) => Result<T, U>,
  /**
   * Returns the `error` if there is one else the result of `f`.
   */
  and_then: <U>(f: (_: T) => Result<U, E>) => Result<U, E>,
  /**
   * Returns the `ok` if there is one else the result of `f`.
   */
  or_else: <U>(_: (_: E) => Result<T, U>) => Result<T, U>,
  /**
   * Maps the `ok` value if it is present.
   */
  map: <U>(_: (_: T) => U) => Result<U, E>,
  /**
   * Maps the `error` value if it is present.
   */
  map_err: <U>(_: (_: E) => U) => Result<T, U>,
  /**
   * Returns the result of either function depending on if the value is `ok` or `error`.
   */
  match: <U>(ok: (_: T) => U, err: (_: E) => U) => U
};

type Option<T> = Result<T, null>;

type ResultExport = {
  /**
   * Constructs a new `ok` [Result].
   */
  ok: <T, E>(_: T) => Result<T, E>,
  /**
   * Constructs a new `error` [Result].
   */
  err: <T, E>(_: E) => Result<T, E>,
  /**
   * Constructs a new [Option].
   */
  maybe: <T>(_?: T) => Option<T>,
  /**
   * Returns either the value if it exists or the default provided.
   */
  exists: <T>(_: T) => (_: T | undefined) => T;
};
