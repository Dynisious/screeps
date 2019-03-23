
(() => {
type Node<T> = {
  value: T,
  next: Option<Node<T>>
};

const node = <T>(value: T, next: Option<Node<T>> = null): Node<T> => ({
  value,
  next
});

module.exports = <T>(list?: T[]): LinkedList<T> => {
  let head: Option<Node<T>> = null;
  let tail: Option<Node<T>> = null;
  let length = 0;
  
  return {
    length: () => length,
    push_front: (value: T) => {
      length += 1;

      if (length === 1) {
        head = node(value);
        tail = head;
      } else {
        head = node(value, head);
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
    pop_front: () => {
      if (head === null) { return null }
      
      length -= 1;

      if (length === 0) { tail = null }

      const { value, next } = head!;

      head = next;

      return value;
    }
  };
};
})();
