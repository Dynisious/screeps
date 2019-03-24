
(() => {
const { maybe } = require('result') as ResultExport;
  
type Node<T> = {
  value: T,
  next: Node<T> | null
};

const node = <T>(value: T, next?: Node<T>): Node<T> => ({
  value,
  next: next === undefined ? null : next
});

module.exports = <T>(list?: T[]): LinkedList<T> => {
  let head: Node<T> | null = null;
  let tail: Node<T> | null = null;
  let length = 0;
  
  const linked = {
    head: (): Option<T> => head === null ? maybe() : maybe(head.value),
    tail: (): Option<T> => tail === null ? maybe() : maybe(tail.value),
    length: () => length,
    push_front: (value: T) => {
      length += 1;

      if (length === 1) {
        head = node(value);
        tail = head;
      } else {
        head = node(value);
      }
    },
    push_back: (value: T) => {
      length += 1;

      if (length === 1) {
        head = node(value);
        tail = head;
      } else {
        tail!.next = node(value);
        tail = tail!.next;
      }
    },
    pop_front: (): Option<T> => {
      if (head === null) return maybe();
      
      length -= 1;

      if (length === 0) tail = null;

      const { value, next } = head!;

      head = next;

      return maybe(value);
    },
    [Symbol.iterator]: () => {
      const iter: any = {};
      const next = (ptr: Node<T> | null) => () => {
        if (ptr === null) return { done: true };

        iter.next = next(ptr.next);
        return { value: ptr.value };
      };
      iter.next = next(head);

      return iter;
    }
  };

  if (list !== undefined) for (const item of list) linked.push_back(item);

  return linked;
};
})();
