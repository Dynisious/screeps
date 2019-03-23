  
(() => {
const result = <T, E>({ v, e }: { v?: T, e?: E }): Result<T, E> => ({
  is_ok: () => typeof v !== 'undefined',
  is_err: () => typeof e !== 'undefined',
  expect: (err_msg: string) => {
      if (e !== undefined) { throw 'called expect on err value: ' + err_msg + e.toString(); }
      
      return v;
  },
  expect_err: (err_msg: string) => {
      if (v !== undefined) { throw 'called expect_err on ok value: ' + err_msg + v.toString(); }
      
      return e;
  },
  unwrap: () => {
      if (e !== undefined) { throw 'called unwrap on err value: ' + e.toString(); }
      
      return v;
  },
  unwrap_err: () => {
      if (v !== undefined) { throw 'called unwrap_err on ok value: ' + v.toString(); }
      
      return e;
  },
  unwrap_or: (o: T) => v === undefined ? o : v,
  and: <U>(other: Result<U, E>) => e === undefined ? other : err<U, E>(e),
  or: <U>(other: Result<T, U>) => v === undefined ? other : ok<T, U>(v),
  and_then: <U>(f: (_: T) => Result<U, E>) => v === undefined ? err<U, E>(e!) : f(v),
  or_else: <U>(f: (_: E) => Result<T, U>) => e === undefined ? ok<T, U>(v!) : f(e),
  map: <U>(f: (_: T) => U) => v === undefined ? err<U, E>(e!) : ok(f(v)),
  map_err: <U>(f: (_: E) => U) => e === undefined ? ok<T, U>(v!) : err(f(e)),
  match: <U>(ok: (_: T) => U, err: (_: E) => U) => v === undefined ? err(e!) : ok(v)
});
const ok = <T, E>(v: T): Result<T, E> => result({ v });
const err = <T, E>(e: E): Result<T, E> => result({ e });
const maybe = <T>(v?: T) => v === undefined ? err(null) : ok(v);
const exists = <T>(d: T) => (v?: T) => v === undefined ? d : v;

module.exports = { ok, err, maybe, exists };
})();
