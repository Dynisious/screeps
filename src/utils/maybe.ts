
(() => {
const optional = <T>(maybe?: T): Maybe<T> => (maybe === undefined) ? null : maybe;
const cond = <T>(cond: boolean, value: T): Maybe<T> => cond ? value : null;
const cond_then = <T>(cond: boolean, value: () => T): Maybe<T> => cond ? value() : null;
const maybe = <T>(maybe: Maybe<T>, a: T): T => (maybe === null) ? a : maybe;
const maybe_then = <T>(maybe: Maybe<T>, a: () => T): T => (maybe === null) ? a() : maybe;
const map = <T, U>(maybe: Maybe<T>, map: (t: T) => U): Maybe<U> => (maybe === null) ? null : map(maybe);
const map_or = <T, U>(maybe: Maybe<T>, map: (t: T) => U, or: U): U => (maybe === null) ? or : map(maybe);
const map_or_else = <T, U>(maybe: Maybe<T>, map: (t: T) => U, or: () => U): U => (maybe === null) ? or() : map(maybe);
const or = <T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> => (a === null) ? b : a;
const or_else = <T>(a: Maybe<T>, b: () => Maybe<T>): Maybe<T> => (a === null) ? b() : a;
const and = <T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> => (a === null) ? a : b;
const and_then = <T, U>(a: Maybe<T>, b: (t: T) => Maybe<U>): Maybe<U> => (a === null) ? a : b(a);

module.exports = <MaybeExport>{ optional, cond, cond_then, maybe, maybe_then, map, map_or, map_or_else, or, or_else, and, and_then, };
})();
