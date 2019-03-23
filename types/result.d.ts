
type Result<T, E> = {
  is_ok: () => boolean,
  is_err: () => boolean,
  expect: (err_msg: string) => T | undefined,
  expect_err: (err_msg: string) => E | undefined,
  unwrap: () => T | undefined,
  unwrap_err: () => E | undefined,
  unwrap_or: (v: T) => T,
  and: <U>(other: Result<U, E>) => Result<U, E>,
  or: <U>(other: Result<T, U>) => Result<T, U>,
  and_then: <U>(f: (_: T) => Result<U, E>) => Result<U, E>,
  or_else: <U>(f: (_: E) => Result<T, U>) => Result<T, U>,
  map: <U>(f: (_: T) => U) => Result<U, E>,
  map_err: <U>(f: (_: E) => U) => Result<T, U>,
  match: <U>(ok: (_: T) => U, err: (_: E) => U) => U
};

type Option<T> = T | null;
