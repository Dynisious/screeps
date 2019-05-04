
(() => {
const DONE = { done: true };
const cons = <T>(head: T, rest: ConsList<T>): Cons<T> => (selector: Selector<T>) => selector(head, rest);
const get_head = <T>(head: T, _: ConsList<T>): T => head;
const head = <T>(cons: Cons<T>): T => <T>cons(get_head);
const get_rest = <T>(_: T, rest: ConsList<T>): ConsList<T> => rest;
const rest = <T>(cons: ConsList<T>): ConsList<T> => (cons === null) ? null : <ConsList<T>>cons(get_rest);
const one = <T>(head: T): Cons<T> => cons(head, null);
const from_list = <T>(arr: T[]): ConsList<T> => append(arr, null);
const iterate = <T>(cons: ConsList<T>): PeekableIterator<T> => {
  const peek = () => (cons === null) ? <IteratorResult<T>>DONE : { value: head(<Cons<T>>cons), done: false, };
  const next = () => {
    const res = peek();

    if (!res.done) cons = rest(<Cons<T>>cons);

    return res;
  };

  return { peek, next, }
};
const concat = <T>(left: ConsList<T>, right: ConsList<T>): ConsList<T> => (left === null) ? right : cons(head(left), concat(rest(left), right));
const append = <T>(left: T[], right: ConsList<T>): ConsList<T> => {
  let list: ConsList<T> = null;

  for (let i = left.length; i >= 0; i -= 1) list = cons(left[i], list);

  return list;
};
const map = <T, U>(list: ConsList<T>, f: (t: T) => U): ConsList<U> => (list === null) ? null : cons(f(head(list)), map(rest(list), f))

module.exports = <ConsExport>{ cons, head, rest, one, from_list, iterate, concat, append, map, };
})();
